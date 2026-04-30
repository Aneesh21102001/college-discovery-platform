import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function CollegeFilters() {
  return (
    <aside className="rounded-3xl border p-6 shadow-sm">
      <h2 className="text-lg font-semibold">
        Filters
      </h2>

      {/* Search */}
      <div className="mt-6">
        <label className="text-sm font-medium">
          Search
        </label>
        <Input
          placeholder="Search colleges..."
          className="mt-2"
        />
      </div>

      {/* Location */}
      <div className="mt-6">
        <label className="text-sm font-medium">
          Location
        </label>

        <div className="mt-3 space-y-2">
          {["Delhi", "Mumbai", "Bangalore", "Hyderabad"].map(
            (city) => (
              <div key={city} className="flex items-center gap-2">
                <Checkbox id={city} />
                <label htmlFor={city} className="text-sm">
                  {city}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      {/* Course */}
      <div className="mt-6">
        <label className="text-sm font-medium">
          Course
        </label>

        <div className="mt-3 space-y-2">
          {["B.Tech", "MBA", "MBBS", "BCA"].map((course) => (
            <div key={course} className="flex items-center gap-2">
              <Checkbox id={course} />
              <label htmlFor={course} className="text-sm">
                {course}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Fees */}
      <div className="mt-6">
        <label className="text-sm font-medium">
          Fees Range
        </label>

        <div className="mt-4">
          <Slider defaultValue={[50000]} max={500000} step={10000} />
        </div>

        <p className="mt-2 text-xs text-muted-foreground">
          Up to ₹5,00,000
        </p>
      </div>

      {/* Rating */}
      <div className="mt-6">
        <label className="text-sm font-medium">
          Rating
        </label>

        <div className="mt-3 space-y-2">
          {["4.5+", "4.0+", "3.5+", "3.0+"].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <Checkbox id={rating} />
              <label htmlFor={rating} className="text-sm">
                {rating}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-8">
        <Button className="w-full rounded-xl">
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}