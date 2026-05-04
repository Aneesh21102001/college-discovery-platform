"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CollegeBanner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const delay = setTimeout(() => {
      router.push(`/colleges?q=${query}`);
    }, 400); // debounce

    return () => clearTimeout(delay);
  }, [query, router]);

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl rounded-3xl border p-8">
        <h1 className="text-3xl font-bold">
          Top Colleges
        </h1>

        <div className="mt-6 relative max-w-xl">
          <Search className="absolute left-4 top-4 h-5 w-5" />

          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search colleges..."
            className="h-12 pl-12"
          />
        </div>
      </div>
    </section>
  );
}