import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Metadata } from "next";
import { RoadmapKanban } from "./roadmap-kanban";
import { getAllRoadmapItems } from "./roadmap-utils";

export const metadata: Metadata = {
  title: "Product Roadmap | Oppulence",
  description:
    "Explore our product roadmap and upcoming features across all Oppulence products.",
};

const products = [
  { id: "all", name: "All Products" },
  { id: "lead-sourcing", name: "Lead Sourcing" },
  { id: "contract-management", name: "Contract Management" },
  { id: "financial-management", name: "Financial Management" },
  { id: "crm", name: "CRM" },
];

export default async function RoadmapPage() {
  const roadmapItems = await getAllRoadmapItems();

  return (
    <div className="bg-white">
      <div className="container py-[5%]">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Product Roadmap
            </h1>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400">
              Stay up to date with our development plans and upcoming features
              across all Oppulence products.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                {products.map((product) => (
                  <TabsTrigger key={product.id} value={product.id}>
                    {product.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {products.map((product) => (
                <TabsContent key={product.id} value={product.id}>
                  <RoadmapKanban
                    items={
                      product.id === "all"
                        ? roadmapItems
                        : roadmapItems.filter(
                            (item) =>
                              item.product
                                .toLowerCase()
                                .replace(/\s+/g, "-") === product.id,
                          )
                    }
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
