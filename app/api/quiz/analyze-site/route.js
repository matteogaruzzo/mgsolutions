import { NextResponse } from 'next/server';
import { analyzeSite } from '@/lib/quiz/siteAnalysis';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, reason: 'invalid_json' }, { status: 400 });
  }

  const url = typeof body?.url === 'string' ? body.url.trim().slice(0, 300) : '';
  if (!url) {
    return NextResponse.json({ success: false, reason: 'missing_url' }, { status: 400 });
  }

  const result = await analyzeSite(url);
  return NextResponse.json(result);
}
