export default function CollegeCourses({ college }: any) {
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="text-xl font-semibold">
        Courses Offered
      </h2>

      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {college.courses
          ?.split(",")
          .map((course: string, index: number) => (
            <li key={index}>{course.trim()}</li>
          ))}
      </ul>
    </div>
  );
}