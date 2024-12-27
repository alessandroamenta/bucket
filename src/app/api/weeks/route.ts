import { NextResponse } from 'next/server';

const BIRTH_DATE = new Date('1999-03-24');
const TOTAL_WEEKS = 4160; // 80 years * 52 weeks

export const dynamic = 'force-dynamic'; // Ensure the route is dynamic

export async function GET() {
  const today = new Date();
  const diffTime = today.getTime() - BIRTH_DATE.getTime();
  const diffWeeks = Math.round(diffTime / (1000 * 60 * 60 * 24 * 7)); // Using Math.round instead of Math.floor
  const weeksLeft = TOTAL_WEEKS - diffWeeks;
  
  return NextResponse.json({
    weeksLeft,
    totalLived: diffWeeks,
    lastUpdated: today.toISOString()
  });
}