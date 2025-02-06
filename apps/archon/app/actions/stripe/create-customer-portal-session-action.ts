"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { logger } from "@/lib/logger";
import { prisma } from "@dub/prisma-archon";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Stripe } from "stripe";

const apiKey = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(apiKey as string);

/**
 * Creates a Stripe customer portal session
 */
export const createCustomerPortalSession = authenticatedAction
  .metadata({
    name: "create-customer-portal-session",
  })
  .action(async ({ ctx: { userId } }) => {
    try {
      logger.debug("Starting customer portal session creation", {
        source: "StripeService",
        context: { userId },
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

      const email = user.email;

      logger.debug("Finding Stripe customer", {
        source: "StripeService",
        context: {
          userId,
          email,
        },
      });

      // Get Stripe customer ID
      const customer = await stripe.customers.list({
        email,
        limit: 1,
      });

      if (!customer.data[0]?.id) {
        logger.error("No Stripe customer found", {
          source: "StripeService",
          context: {
            userId,
            email,
          },
        });
        throw new Error("No Stripe customer found");
      }

      logger.debug("Creating customer portal session", {
        source: "StripeService",
        context: {
          userId,
          email,
          customerId: customer.data[0].id,
        },
      });

      const session = await stripe.billingPortal.sessions.create({
        customer: customer.data[0].id,
        return_url: `${protocol}://${host}/upgrade`,
      });

      if (!session.url) {
        logger.error("Failed to create customer portal session URL", {
          source: "StripeService",
          context: {
            userId,
            email,
            customerId: customer.data[0].id,
            sessionId: session.id,
          },
        });
        throw new Error("Failed to create customer portal session");
      }

      redirect(session.url);
    } catch (error) {
      logger.error("Failed to create customer portal session", {
        source: "StripeService",
        error: error instanceof Error ? error : new Error("Unknown error"),
        context: {
          userId,
          errorType: error instanceof Error ? error.name : typeof error,
        },
      });
      throw error;
    }
  });
