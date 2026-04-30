import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CollegeSort() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">
        Showing 12 colleges
      </p>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="rating">Rating</SelectItem>
          <SelectItem value="fees">Fees</SelectItem>
          <SelectItem value="popularity">Popularity</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}