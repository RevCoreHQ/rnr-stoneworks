import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service?: string;
  cityZip: string;
  message?: string;
}

const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userSubmissions = submissions.get(ip) || [];
  const recent = userSubmissions.filter((t) => now - t < RATE_LIMIT_WINDOW);
  submissions.set(ip, recent);
  return recent.length >= MAX_SUBMISSIONS;
}

function recordSubmission(ip: string) {
  const existing = submissions.get(ip) || [];
  existing.push(Date.now());
  submissions.set(ip, existing);
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[\d\s()+.-]{7,20}$/.test(phone);
}

function sanitize(str: string): string {
  return str.trim().replace(/<[^>]*>/g, '').slice(0, 1000);
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body: ContactPayload = await request.json();

    if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.cityZip) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const data = {
      firstName: sanitize(body.firstName),
      lastName: sanitize(body.lastName),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      service: body.service ? sanitize(body.service) : 'Not specified',
      cityZip: sanitize(body.cityZip),
      message: body.message ? sanitize(body.message) : '',
    };

    if (!validateEmail(data.email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!validatePhone(data.phone)) {
      return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
    }

    console.log('📬 New contact form submission:', {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      service: data.service,
      cityZip: data.cityZip,
      message: data.message.slice(0, 100),
      timestamp: new Date().toISOString(),
    });

    recordSubmission(ip);

    return NextResponse.json({ success: true, message: 'Thank you! We will be in touch soon.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please call us directly at (303) 587-3035.' },
      { status: 500 }
    );
  }
}
