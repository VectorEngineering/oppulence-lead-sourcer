"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prisma } from "@dub/prisma-archon";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Stripe } from "stripe";
import { createStripeSessionSchema } from "./schema";

const apiKey = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(apiKey as string);

/**
 * Creates a Stripe checkout session for subscription
 */
export const createCheckoutSession = authenticatedAction
  .metadata({
    name: "create-checkout-session",
  })
  .schema(createStripeSessionSchema)
  .action(async ({ parsedInput: { priceId }, ctx: { userId } }) => {
    try {
      logger.debug("Starting Stripe checkout session creation", {
        source: "StripeService",
        context: {
          userId,
          priceId,
        },
      });

      const host = (await headers()).get("host");
      const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      logger.debug("Creating Stripe session", {
        source: "StripeService",
        context: {
          userId,
          email: user.email,
          priceId,
        },
      });

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        customer_email: user.email,
        success_url: `${protocol}://${host}/`,
        allow_promotion_codes: true,
      });

      if (!session.url) {
        logger.error("Failed to create Stripe session URL", {
          source: "StripeService",
          context: {
            userId,
            email: user.email,
            priceId,
            sessionId: session.id,
          },
        });
        throw new Error("Failed to create Stripe checkout session");
      }

      redirect(session.url);
    } catch (error) {
      logger.error("Failed to create Stripe checkout session", {
        source: "StripeService",
        error: error instanceof Error ? error : new Error("Unknown error"),
        context: {
          userId,
          priceId,
          errorType: error instanceof Error ? error.name : typeof error,
        },
      });
      throw error;
    }
  });
