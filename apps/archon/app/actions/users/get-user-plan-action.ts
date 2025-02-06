"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prisma } from "@dub/prisma-archon";
import { getUserPlanSchema } from "./schema";

/**
 * Gets the plan for a user associated with an endpoint
 * @returns The user's plan type
 * @throws Error if the endpoint is not found or not associated with a user
 */
export const getUserPlan = authenticatedAction
  .metadata({
    name: "get-user-plan",
  })
  .schema(getUserPlanSchema)
  .action(async ({ parsedInput: { endpointId }, ctx: { userId } }) => {
    try {
      logger.debug("Starting user plan retrieval", {
        source: "UserService",
        context: { endpointId },
      });

      const result = await prisma.user.findFirst({
        where: {
          endpoints: {
            some: { id: endpointId },
          },
        },
        select: { plan: true },
      });

      if (!result) {
        logger.error("Failed to get user plan - endpoint not found", {
          source: "UserService",
          context: { endpointId },
        });
        throw new Error("Endpoint not found or not associated with a user");
      }

      return result.plan;
    } catch (error) {
      logger.error("Failed to get user plan", {
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
