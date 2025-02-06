"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prisma } from "@dub/prisma-archon";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { randomBytes } from "node:crypto";
import { createEndpointFormSchema } from "./schema";

/**
 * Creates an endpoint
 * Protected by authenticationAction wrapper
 * Shares a zod schema with react-hook-form in ./validations.ts
 */
export const createEndpoint = authenticatedAction
  .metadata({
    name: "create-endpoint",
  })
  .schema(createEndpointFormSchema)
  .action(async ({ parsedInput, ctx: { userId } }) => {
    try {
      logger.debug("Starting endpoint creation", {
        source: "EndpointService",
        context: {
          userId,
          name: parsedInput.name,
          formEnabled: parsedInput.formEnabled,
          webhookEnabled: parsedInput.webhookEnabled,
          schemaLength: parsedInput.schema.length,
        },
      });

      const token = randomBytes(32).toString("hex");
      const id = randomBytes(16).toString("hex");
      const result = await prisma.endpoint.create({
        data: {
          id: id,
          userId: userId,
          name: parsedInput.name,
          schema: JSON.stringify(parsedInput.schema),
          formEnabled: parsedInput.formEnabled,
          successUrl: parsedInput.successUrl,
          failUrl: parsedInput.failUrl,
          webhookEnabled: parsedInput.webhookEnabled,
          webhook: parsedInput.webhook,
          token: token,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      revalidatePath("/portal/endpoints");
      redirect("/portal/endpoints");
    } catch (error) {
      logger.error("Failed to create endpoint", {
        source: "EndpointService",
        error: error instanceof Error ? error : new Error("Unknown error"),
        context: {
          userId,
          name: parsedInput.name,
          errorType: error instanceof Error ? error.name : typeof error,
        },
      });
      throw error;
    }
  });
