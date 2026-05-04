export default function CollegeCardSkeleton() {
  return (
    <div className="rounded-3xl border p-6 animate-pulse">
      <div className="h-6 w-1/2 bg-muted rounded mb-4" />
      <div className="h-4 w-1/3 bg-muted rounded mb-2" />
      <div className="h-4 w-full bg-muted rounded mb-2" />
      <div className="h-4 w-2/3 bg-muted rounded" />
    </div>
  );
}