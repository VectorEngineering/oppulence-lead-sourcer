"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prisma } from "@dub/prisma-archon";
import { revalidatePath } from "next/cache";
import { toggleEndpointSchema } from "./schema";

/**
 * Enables a specific endpoint by id
 */
export const enableEndpoint = authenticatedAction
  .metadata({
    name: "enable-endpoint",
  })
  .schema(toggleEndpointSchema)
  .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
    try {
      logger.debug("Starting endpoint enable", {
        source: "EndpointService",
        context: {
          endpointId: id,
          userId,
        },
      });

      const result = await prisma.endpoint.update({
        where: {
          id: id,
          userId: userId,
        },
        data: {
          enabled: true,
          updatedAt: new Date(),
        },
      });

      logger.debug("Enable result", {
        source: "EndpointService",
        context: {
          endpointId: id,
          updated: result.id !== null,
        },
      });

      if (result.id === null) {
        logger.error("Unauthorized endpoint enable attempt", {
          source: "EndpointService",
          context: {
            endpointId: id,
            userId,
          },
        });
        throw new Error("You are not authorized for this action.");
      }

      revalidatePath("/portal/endpoints");
      return { success: true };
    } catch (error) {
      logger.error("Failed to enable endpoint", {
        source: "EndpointService",
        error: error instanceof Error ? error : new Error("Unknown error"),
        context: {
          endpointId: id,
          userId,
          errorType: error instanceof Error ? error.name : typeof error,
        },
      });
      throw error;
    }
  });

/**
 * Disables a specific endpoint by id
 */
export const disableEndpoint = authenticatedAction
  .schema(toggleEndpointSchema)
  .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
    try {
      logger.debug("Starting endpoint disable", {
        source: "EndpointService",
        context: {
          endpointId: id,
          userId,
        },
      });

      const result = await prisma.endpoint.update({
        where: {
          id: id,
          userId: userId,
        },
        data: {
          enabled: false,
          updatedAt: new Date(),
        },
      });

      logger.debug("Disable result", {
        source: "EndpointService",
        context: {
          endpointId: id,
          updated: result.id !== null,
        },
      });

      if (result.id === null) {
        logger.error("Unauthorized endpoint disable attempt", {
          source: "EndpointService",
          context: {
            endpointId: id,
            userId,
          },
        });
        throw new Error("You are not authorized for this action.");
      }

      revalidatePath("/portal/endpoints");
      return { success: true };
    } catch (error) {
      logger.error("Failed to disable endpoint", {
        source: "EndpointService",
        error: error instanceof Error ? error : new Error("Unknown error"),
        context: {
          endpointId: id,
          userId,
          errorType: error instanceof Error ? error.name : typeof error,
        },
      });
      throw error;
    }
  });
