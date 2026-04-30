export default function CollegeInfo() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[
        { label: "Fees", value: "₹2,50,000 / year" },
        { label: "Courses", value: "B.Tech, M.Tech, MBA" },
        { label: "Placement", value: "₹25 LPA Avg" },
      ].map((item) => (
        <div key={item.label} className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            {item.label}
          </p>
          <p className="mt-2 text-lg font-semibold">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}