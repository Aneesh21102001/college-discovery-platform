export default function CollegeInfo({ college }: any) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border p-6">
        <p className="text-sm text-muted-foreground">
          Fees
        </p>
        <p className="mt-2 text-lg font-semibold">
          ₹{Number(college.fees).toLocaleString()}
        </p>
      </div>

      <div className="rounded-2xl border p-6">
        <p className="text-sm text-muted-foreground">
          Rating
        </p>
        <p className="mt-2 text-lg font-semibold">
          {college.rating}
        </p>
      </div>

      <div className="rounded-2xl border p-6">
        <p className="text-sm text-muted-foreground">
          Location
        </p>
        <p className="mt-2 text-lg font-semibold">
          {college.location}
        </p>
      </div>
    </div>
  );
}