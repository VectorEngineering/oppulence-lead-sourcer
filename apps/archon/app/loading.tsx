import { Breadcrumbs } from "@/components/parts/breadcrumbs";
import { PageWrapper } from "@/components/parts/page-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <Breadcrumbs pageName="Loading..." />
      <PageWrapper>
        <Skeleton className="mb-4 h-12 w-3/4" />
        <Skeleton className="mb-8 h-4 w-1/2" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </PageWrapper>
    </>
  );
}
