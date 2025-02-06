import { Breadcrumbs } from "@/components/parts/breadcrumbs";
import { Header } from "@/components/parts/header";
import { PageWrapper } from "@/components/parts/page-wrapper";
import { BusinessConfig } from "@dub/platform-config";
import { HelpForm } from "./help-form";

export const dynamic = "force-dynamic";

const pageData = {
  name: "Support",
  title: "Support",
  description: `Get help with ${BusinessConfig.name}`,
};

export default async function Page() {
  return (
    <>
      <Breadcrumbs pageName={pageData?.name} />
      <PageWrapper>
        <Header title={pageData?.title}>{pageData?.description}</Header>
        <div className="max-w-2xl">
          <HelpForm />
        </div>
      </PageWrapper>
    </>
  );
}
