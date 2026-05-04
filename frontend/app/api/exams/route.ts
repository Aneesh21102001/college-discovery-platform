import { NextResponse } from "next/server";
import { exams } from "@/lib/data/exams";

export async function GET() {
  return NextResponse.json(exams);
}