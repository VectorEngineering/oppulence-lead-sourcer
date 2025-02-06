"use server";

import { actionClient } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prisma } from "@dub/prisma-archon";

/**
 * Clears the lead count for all users
 * Runs once a month via CRON
 * This is an unauthenticated action as it's triggered by the CRON job
 */
export const clearLeadCount = actionClient.action(async () => {
  try {
    logger.debug("Starting monthly lead count reset", {
      source: "UserService",
      context: { trigger: "CRON" },
    });

    const updatedUsers = await prisma.user.updateMany({
      data: {
        leadCount: 0,
      },
    });

    logger.info("Lead counts reset", {
      source: "UserService",
      context: {
        trigger: "CRON",
        updatedUsers: updatedUsers.count,
      },
    });

    return { success: true };
  } catch (error) {
    logger.error("Failed to reset lead counts", {
      source: "UserService",
      error: error instanceof Error ? error : new Error("Unknown error"),
      context: {
        trigger: "CRON",
        errorType: error instanceof Error ? error.name : typeof error,
      },
    });
    throw error;
  }
});
