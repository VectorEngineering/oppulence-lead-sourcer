"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prismaEdge as prisma } from "@dub/prisma-archon/edge";

type LeadWithEndpoint = {
  id: string;
  data: Record<string, string | number | boolean>;
  schema: { key: string; value: string }[];
  createdAt: Date;
  updatedAt: Date;
  endpointId: string;
  endpointName?: string;
};

async function fetchLeadsData(userId: string): Promise<LeadWithEndpoint[]> {
  const leadsData = await prisma.lead.findMany({
    where: {
      endpoint: {
        userId,
      },
    },
    include: {
      endpoint: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return leadsData.map((lead) => ({
    id: lead.id,
    data: lead.data as Record<string, string | number | boolean>,
    schema: lead.endpoint.schema as { key: string; value: string }[],
    createdAt: lead.createdAt,
    updatedAt: lead.updatedAt,
    endpointId: lead.endpointId,
    endpointName: lead.endpoint.name,
  }));
}
/**
 * Gets all leads for a user
 */
export const getLeads = authenticatedAction
  .metadata({
    name: "get-leads",
  })
  .action(async ({ ctx: { userId } }) => {
    try {
      logger.debug("Fetching all leads", {
        source: "LeadService",
        context: { userId },
      });
      // Auth check is handled by authenticatedAction
      return await fetchLeadsData(userId);
    } catch (error) {
      logger.error("Failed to get leads", {
        source: "LeadService",
        error: error instanceof Error ? error : new Error("Unknown error"),
        context: {
          userId,
          errorType: error instanceof Error ? error.name : typeof error,
        },
      });
      throw error;
    }
  });
