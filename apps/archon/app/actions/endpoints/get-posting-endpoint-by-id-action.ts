"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prisma } from "@dub/prisma-archon";
import { getPostingEndpointByIdSchema } from "./schema";

/**
 * Gets a specific endpoint to post to
 * Does not need to be authenticated
 * Used in the posting route
 */
export const getPostingEndpointById = authenticatedAction
  .metadata({
    name: "get-posting-endpoint-by-id",
  })
  .schema(getPostingEndpointByIdSchema)
  .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
    try {
      logger.debug("Fetching posting endpoint by ID", {
        source: "EndpointService",
        context: { endpointId: id },
      });

      const data = await prisma.endpoint.findFirst({
        where: {
          id: id,
        },
      });

      logger.debug("Endpoint lookup result", {
        source: "EndpointService",
        context: {
          endpointId: id,
          found: !!data,
          enabled: data?.enabled,
        },
      });

      if (!data) {
        logger.error("Posting endpoint not found", {
          source: "EndpointService",
          context: { endpointId: id },
        });
        return null;
      }

      return data;
    } catch (error) {
      logger.error("Failed to get posting endpoint", {
        source: "EndpointService",
        error: error instanceof Error ? error : new Error("Unknown error"),
        context: {
          endpointId: id,
          errorType: error instanceof Error ? error.name : typeof error,
        },
      });
      throw error;
    }
  });
