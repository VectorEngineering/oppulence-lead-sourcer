import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import CreateForm from "@/components/groups/endpoints/create-form";
import { Header } from "@/components/parts/header";
import { PageWrapper } from "@/components/parts/page-wrapper";
import Icon from "@/public/icon.svg";
import { BusinessConfig } from "@dub/platform-config";
import { Home } from "lucide-react";
import Image from "next/image";

export const dynamic = "force-dynamic";

const pageData = {
  name: "New Endpoint",
  title: "Create an Endpoint",
  description: "Create a new endpoint.",
};

export default async function Page() {
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
            <BreadcrumbPage className="bg-accent rounded-sm px-2 py-1">
              {pageData?.name}
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
      <PageWrapper>
        <Header title={pageData?.title}>{pageData?.description}</Header>
        <div className="max-w-2xl">
          <CreateForm />
        </div>
      </PageWrapper>
    </>
  );
}
