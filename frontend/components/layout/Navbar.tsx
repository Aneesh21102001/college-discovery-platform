import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <GraduationCap className="h-6 w-6" />
          <span>EduPlatform</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/schools"
            className="text-sm font-medium transition hover:text-primary"
          >
            Schools
          </Link>

          <Link
            href="/colleges-for-12th"
            className="text-sm font-medium transition hover:text-primary"
          >
            12th Colleges
          </Link>

          <Link
            href="/colleges"
            className="text-sm font-medium transition hover:text-primary"
          >
            UG/PG Colleges
          </Link>

          <Link
            href="/universities"
            className="text-sm font-medium transition hover:text-primary"
          >
            Universities
          </Link>

          <Link
            href="/courses"
            className="text-sm font-medium transition hover:text-primary"
          >
            Courses
          </Link>

          <Link
            href="/exams"
            className="text-sm font-medium transition hover:text-primary"
          >
            Exams
          </Link>

          <Link
            href="/compare"
            className="text-sm font-medium transition hover:text-primary"
          >
            Compare
          </Link>
        </nav>

        <Button size="lg" className="rounded-xl px-6">
          Get Counseling
        </Button>
      </div>
    </header>
  );
}