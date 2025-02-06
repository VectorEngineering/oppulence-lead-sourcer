import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getLeadsByEndpoint } from "@/app/actions/leads/get-leads-by-endpoint-action";
import ExportCSV from "@/components/parts/export-csv";
import { Header } from "@/components/parts/header";
import { PageWrapper } from "@/components/parts/page-wrapper";
import Icon from "@/public/icon.svg";
import { BusinessConfig } from "@dub/platform-config";
import type { Lead } from "@dub/prisma-archon/client";
import { Home } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

const pageData = {
  name: "Endpoint Leads",
  title: "Endpoint Leads",
  description: "All collected leads for this endpoint",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id: string = (await params).id;
  const leadsData = await getLeadsByEndpoint({
    id: id,
  });
  const { data, serverError } = leadsData || {};
  if (!data || serverError) notFound();
  const { leadData: leads, schema } = data;

  return (
    <>
      <Breadcrumbs leadId={id} />
      <PageWrapper>
        <Header title={pageData?.title}>{pageData?.description}</Header>
        <ExportCSV id={id} leads={leads} schema={schema} />
        <Table className="not-prose">
          <TableHeader>
            <TableRow className="bg-secondary hover:bg-secondary">
              {schema.map((column) => (
                <TableCell key={column.key}>{column.key}</TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.length > 0 ? (
              leads.map((lead: Lead, rowIndex: number) => (
                <TableRow key={`row-${rowIndex}-${lead.id}`}>
                  {schema.map((column) => (
                    <TableCell key={`cell-${rowIndex}-${column.key}`}>
                      {(lead.data as Record<string, unknown>)?.[
                        column.key
                      ]?.toString() ?? ""}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={schema.length} className="text-center">
                  No leads to show.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </PageWrapper>
    </>
  );
}

function Breadcrumbs({ leadId }: { leadId: string }) {
  return (
    <Breadcrumb className="bg-muted/50 flex h-[67.63px] items-center justify-between rounded-lg border p-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home size={20} />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/portal/endpoints">Endpoints</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="bg-accent rounded-sm px-2 py-1">
            {leadId}
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>Leads</BreadcrumbItem>
      </BreadcrumbList>
      <Image
        className="hover:animate-spin dark:invert"
        src={Icon}
        width={24}
        height={24}
        alt={`${BusinessConfig.name} Icon`}
      />
    </Breadcrumb>
  );
}
