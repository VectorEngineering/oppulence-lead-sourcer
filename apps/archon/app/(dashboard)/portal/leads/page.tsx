import { getEndpoints } from "@/app/actions/endpoints/get-endpoints-action";
import { getLeads } from "@/app/actions/leads/get-leads-action";
import { columns } from "@/components/groups/leads/columns";
import { DataTable } from "@/components/groups/leads/data-table";
import { Breadcrumbs } from "@/components/parts/breadcrumbs";
import { Header } from "@/components/parts/header";
import { PageWrapper } from "@/components/parts/page-wrapper";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const pageData = {
  name: "Leads",
  title: "Leads",
  description: "Breakdown of all your leads",
};

export default async function Page() {
  // fetch data in parallel
  const [leads, endpoints] = await Promise.all([getLeads(), getEndpoints()]);

  const { data: leadsData, serverError: leadsServerError } = leads || {};
  const { data: endpointsData, serverError: endpointsServerError } =
    endpoints || {};

  // check for errors
  if (
    !leadsData ||
    !endpointsData ||
    leadsServerError ||
    endpointsServerError
  ) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs pageName={pageData?.name} />
      <PageWrapper>
        <Header title={pageData?.title}>{pageData?.description}</Header>
        <DataTable
          columns={columns}
          data={leadsData}
          endpoints={endpointsData}
        />
      </PageWrapper>
    </>
  );
}
