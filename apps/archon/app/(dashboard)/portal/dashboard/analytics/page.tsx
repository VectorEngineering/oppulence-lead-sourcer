import { Header } from "@/components/parts/header";
import { PageWrapper } from "@/components/parts/page-wrapper";

export const dynamic = "force-dynamic";

const pageData = {
  name: "Analytics",
  title: "Analytics",
  description: "Analytics of all your events",
};

export default async function Page() {
  return (
    <>
      <PageWrapper developmentMode={true}>
        <Header title={pageData?.title}>{pageData?.description}</Header>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Analytics</h2>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
