import { Header } from "@/components/parts/header";
import { PageWrapper } from "@/components/parts/page-wrapper";
import type { PageDetails } from "@/lib/types/types";

/**
 *  dashboard layout for pages that don't need to be dynamic
 * @param children - The children to render within the layout
 * @param pageData - The page details
 * @returns The  dashboard layout
 */
const DashboardLayout = ({
  children,
  pageData,
}: {
  children: React.ReactNode;
  pageData: PageDetails;
}) => {
  return (
    <PageWrapper>
      <Header title={pageData?.title}>{pageData?.description}</Header>
      {children}
    </PageWrapper>
  );
};

export default DashboardLayout;
