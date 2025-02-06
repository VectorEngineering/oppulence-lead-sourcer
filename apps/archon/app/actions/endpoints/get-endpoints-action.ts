"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import type { Endpoint } from "@dub/prisma-archon/client";
import { prismaEdge as prisma } from "@dub/prisma-archon/edge";
/**
 * Gets all endpoints for a user
 */
export const getEndpoints = authenticatedAction
  .metadata({
    name: "get-endpoints",
  })
  .action(async ({ ctx: { userId } }) => {
    try {
      logger.debug("Fetching all endpoints", {
        source: "EndpointService",
        context: { userId },
      });

      const data = await prisma.endpoint.findMany({
        where: {
          userId: userId,
        },
        orderBy: {
          updatedAt: "desc",
        },
      });

      return data satisfies Endpoint[];
    } catch (error) {
      logger.error("Failed to get endpoints", {
        source: "EndpointService",
        error: error instanceof Error ? error : new Error("Unknown error"),
        context: {
          userId,
          errorType: error instanceof Error ? error.name : typeof error,
        },
      });
      throw error;
    }
  });
