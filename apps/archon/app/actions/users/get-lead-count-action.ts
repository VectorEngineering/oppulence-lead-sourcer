"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prisma } from "@dub/prisma-archon";
import { getLeadCountSchema } from "./schema";

/**
 * Retrieves the lead count for a specific endpoint
 * @returns The lead count associated with the endpoint's user
 * @throws Error if the endpoint is not found or not associated with a user
 */
export const getLeadCount = authenticatedAction
  .metadata({
    name: "get-lead-count",
  })
  .schema(getLeadCountSchema)
  .action(async ({ parsedInput: { endpointId }, ctx: { userId } }) => {
    try {
      logger.debug("Starting lead count retrieval", {
        source: "UserService",
        context: { endpointId },
      });

      const result = await prisma.user.findFirst({
        where: {
          endpoints: {
            some: { id: endpointId },
          },
        },
      });

      if (!result) {
        logger.error("Failed to get lead count - endpoint not found", {
          source: "UserService",
          context: { endpointId },
        });
        throw new Error("Endpoint not found or not associated with a user");
      }

      return result.leadCount;
    } catch (error) {
      logger.error("Failed to get lead count", {
        source: "UserService",
        error: error instanceof Error ? error : new Error("Unknown error"),
        context: {
          endpointId,
          errorType: error instanceof Error ? error.name : typeof error,
        },
      });
      throw error;
    }
  });
