"use server";

import { logger } from "@/lib/logger";
import { checkRateLimit } from "./rate-limit";

export async function checkActionRateLimit(actionName: string, userId: string) {
  try {
    logger.debug("Starting rate limit check", {
      source: "ServerAction",
      context: { actionName },
    });

    if (!actionName) {
      throw new Error("Action name is required for rate limiting");
    }

    const { remaining } = await checkRateLimit(actionName, userId);

    logger.debug("Rate limit check passed", {
      source: "ServerAction",
      context: {
        remaining,
        actionName,
      },
    });

    return { success: true, remaining };
  } catch (error) {
    logger.error("Rate limit check failed", {
      source: "ServerAction",
      error: error instanceof Error ? error : new Error("Unknown error"),
      context: { actionName },
    });
    return {
      success: false,
      error: error instanceof Error ? error.message : "Rate limit check failed",
    };
  }
}
