import { NextResponse } from "next/server";
import { colleges } from "@/lib/data/colleges";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const q = searchParams.get("q")?.toLowerCase() || "";
  const location = searchParams.get("location")?.toLowerCase() || "";
  const sort = searchParams.get("sort") || "";

  let filtered = colleges.filter((c) => {
    const matchesQuery = c.name.toLowerCase().includes(q);
    const matchesLocation = location
      ? c.location.toLowerCase().includes(location)
      : true;

    return matchesQuery && matchesLocation;
  });

  // sort
  if (sort === "rating") {
    filtered = filtered.sort(
      (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
    );
  }

  if (sort === "fees") {
    filtered = filtered.sort(
      (a, b) =>
        parseInt(a.fees.replace(/\D/g, "")) -
        parseInt(b.fees.replace(/\D/g, ""))
    );
  }

  return NextResponse.json(filtered);
}