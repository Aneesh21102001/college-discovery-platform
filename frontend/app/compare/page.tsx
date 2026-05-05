"use client";

import { useEffect, useState } from "react";

export default function ComparePage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("compare") || "[]");
    setItems(data);
  }, []);

  if (items.length === 0) {
    return <div className="p-10 text-center">No colleges selected</div>;
  }

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center">
        Compare Colleges
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((c) => (
          <div key={c.slug} className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p className="mt-2 text-sm">{c.location}</p>
            <p className="mt-2 text-sm">Rating: {c.rating}</p>
            <p className="mt-2 text-sm">Fees: {c.fees}</p>
            <p className="mt-2 text-sm">{c.courses}</p>
          </div>
        ))}
      </div>
    </div>
  );
}