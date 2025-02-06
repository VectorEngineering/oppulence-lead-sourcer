// components/dashboard/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function PageClientLoading() {
  return (
    <div className="space-y-6">
      {/* Chart and Usage Section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Chart Area Skeleton */}
        <div className="col-span-2 space-y-4">
          <Skeleton className="h-[300px] rounded-lg" />
          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-24 rounded-lg" />
            <Skeleton className="h-24 rounded-lg" />
            <Skeleton className="h-24 rounded-lg" />
          </div>
        </div>

        {/* Usage Section Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-[300px] rounded-lg" />
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-32 rounded-lg" />
        ))}
      </div>

      {/* Recent Leads Table Section */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-36" /> {/* Table Title */}
        <div className="space-y-2">
          {/* Table Header */}
          <Skeleton className="h-12 rounded-lg" />
          {/* Table Rows */}
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-16 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
