"use server";

import { logger } from "@/lib/logger";
import { client as RedisClient } from "@dub/kv/client";
import { Ratelimit } from "@upstash/ratelimit";

const ratelimit = new Ratelimit({
  limiter: Ratelimit.fixedWindow(10, "10s"),
  redis: RedisClient,
});

export async function checkRateLimit(actionName: string, userId: string) {
  try {
    logger.debug("Rate limit check details", {
      source: "AuthActionClient",
      context: {
        userId,
        actionName,
      },
    });

    const { success, remaining } = await ratelimit.limit(
      `${userId}-${actionName}`,
    );

    if (!success) {
      logger.warn("Rate limit exceeded", {
        source: "AuthActionClient",
        context: {
          userId,
          actionName,
        },
      });
      throw new Error("Too many requests");
    }

    return { remaining };
  } catch (error) {
    logger.error("Rate limit check failed", {
      source: "AuthActionClient",
      error: error instanceof Error ? error : new Error("Unknown error"),
      context: {
        userId,
        actionName,
      },
    });
    throw error;
  }
}
