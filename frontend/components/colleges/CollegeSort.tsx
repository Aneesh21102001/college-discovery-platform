"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CollegeSort() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.push(`/colleges?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">
        Sort by
      </p>

      <select
        value={currentSort}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded-xl border px-3 py-2 text-sm"
      >
        <option value="">Default</option>
        <option value="rating">Rating</option>
        <option value="fees">Fees (Low to High)</option>
      </select>
    </div>
  );
}