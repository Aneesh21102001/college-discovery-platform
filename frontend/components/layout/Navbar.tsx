import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          EduPlatform
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="/">Home</Link>
          <Link href="/colleges">Colleges</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Button>
          Get Counseling
        </Button>
      </div>
    </header>
  );
}