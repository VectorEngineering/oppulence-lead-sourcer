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

import { getLeadData } from "@/app/actions/leads/get-lead-data-action";
import { Header } from "@/components/parts/header";
import { PageWrapper } from "@/components/parts/page-wrapper";
import Icon from "@/public/icon.svg";
import { BusinessConfig } from "@dub/platform-config";
import { Home } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type React from "react";

const pageData = {
  name: "Lead data",
  title: "Lead data",
  description: "Breakdown of this lead's data",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id: string = (await params).id;
  const leadData = await getLeadData({ id: id });
  const { data, serverError } = leadData || {};

  if (!data || serverError) {
    return notFound();
  }

  const dataEntries = Object.entries(data.data as Record<string, string>);

  return (
    <>
      <Breadcrumbs leadId={id} />
      <PageWrapper>
        <Header title={pageData?.title}>{pageData?.description}</Header>
        <Table className="not-prose">
          <TableHeader>
            <TableRow className="bg-secondary hover:bg-secondary">
              <TableCell>Field</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataEntries.map(([key, value], index) => (
              <TableRow key={`row-${index}-${key}`}>
                <TableCell>{key}</TableCell>
                <TableCell>{value as React.ReactNode}</TableCell>
              </TableRow>
            ))}
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
          <BreadcrumbLink href="/leads">Leads</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="bg-accent rounded-sm px-2 py-1">
            {leadId}
          </BreadcrumbPage>
        </BreadcrumbItem>
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
