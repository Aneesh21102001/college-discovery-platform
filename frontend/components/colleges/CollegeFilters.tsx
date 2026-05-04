"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

const cities = ["mumbai", "delhi", "bangalore"];

export default function CollegeFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedLocation = searchParams.get("location") || "";

  const handleChange = (city: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedLocation === city) {
      params.delete("location");
    } else {
      params.set("location", city);
    }

    router.push(`/colleges?${params.toString()}`);
  };

  return (
    <aside className="rounded-3xl border p-6">
      <h2 className="text-lg font-semibold">Location</h2>

      <div className="mt-4 space-y-2">
        {cities.map((city) => (
          <div key={city} className="flex items-center gap-2">
            <Checkbox
              checked={selectedLocation === city}
              onCheckedChange={() => handleChange(city)}
            />
            <label className="text-sm capitalize">{city}</label>
          </div>
        ))}
      </div>
    </aside>
  );
}