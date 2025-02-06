"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prisma } from "@dub/prisma-archon";
import { incrementLeadCountSchema } from "./schema";

/**
 * Increments the lead count for a user.
 * Used to track the number of leads a user has received.
 */
export const incrementLeadCount = authenticatedAction
  .metadata({
    name: "increment-lead-count",
  })
  .schema(incrementLeadCountSchema)
  .action(async ({ parsedInput: { endpointId }, ctx: { userId } }) => {
    try {
      logger.debug("Starting lead count increment", {
        source: "UserService",
        context: { endpointId },
      });

      // Build a subquery to fetch the userId from endpoints
      const endpoint = await prisma.endpoint.findFirst({
        where: { id: endpointId },
        select: { user: { select: { id: true } } },
      });

      if (!endpoint) {
        throw new Error("Endpoint not found");
      }

      // Perform the update. In MySQL, Drizzle returns rowsAffected & insertId instead of using .returning()
      const user = await prisma.user.update({
        where: { id: endpoint.user.id },
        data: { leadCount: { increment: 1 } },
      });

      if (!user) {
        throw new Error("User not found for endpoint");
      }

      // Optionally return something if needed
      return { success: true };
    } catch (error) {
      logger.error("Failed to increment lead count", {
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
