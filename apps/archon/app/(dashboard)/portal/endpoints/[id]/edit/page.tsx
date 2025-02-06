import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { getEndpointById } from "@/app/actions/endpoints/get-endpoint-by-id-action";
import EditForm from "@/components/groups/endpoints/edit-form";
import { Header } from "@/components/parts/header";
import { PageWrapper } from "@/components/parts/page-wrapper";
import Icon from "@/public/icon.svg";
import { BusinessConfig } from "@dub/platform-config";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const pageData = {
  name: "Edit Endpoint",
  title: "Edit Your Endpoint",
  description: "Edit your endpoint.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // fetch endpoint data
  const id: string = (await params).id;
  const endpoint = await getEndpointById({ id: id });
  const { data: endpointData, serverError } = endpoint || {};

  // check for errors
  if (!endpointData || serverError) notFound();

  return (
    <>
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
            <Link href={`/portal/endpoints/${id}`}>
              <BreadcrumbPage className="bg-accent rounded-sm px-2 py-1">
                {id}
              </BreadcrumbPage>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Edit</BreadcrumbItem>
        </BreadcrumbList>
        <Image
          className="hover:animate-spin dark:invert"
          src={Icon}
          width={24}
          height={24}
          alt={`${BusinessConfig.name} Icon`}
        />
      </Breadcrumb>
      <PageWrapper>
        <Header title={pageData?.title}>{pageData?.description}</Header>
        <EditForm id={id} endpoint={endpointData} />
      </PageWrapper>
    </>
  );
}
