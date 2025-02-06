import { STRIPE_PLANS } from "@/lib/constants/stripe";
import { prisma } from "@dub/prisma-archon";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Stripe } from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const headerPayload = await headers();
    const signature = headerPayload.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 },
      );
    }

    // Verify the webhook signature
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret,
    );

    // Handle checkout session completion
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Get the price ID from the session
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id,
      );
      const priceId = lineItems.data[0].price?.id;

      // Determine the plan based on price ID
      let plan: "lite" | "pro" | "business" | "enterprise" | "free" = "free";

      // Get all possible price IDs for each plan
      const priceIdToPlan = {
        [STRIPE_PLANS.lite.monthlyPriceId.dev]: "lite",
        [STRIPE_PLANS.lite.monthlyPriceId.prod]: "lite",
        [STRIPE_PLANS.lite.yearlyPriceId.dev]: "lite",
        [STRIPE_PLANS.lite.yearlyPriceId.prod]: "lite",
        [STRIPE_PLANS.pro.monthlyPriceId.dev]: "pro",
        [STRIPE_PLANS.pro.monthlyPriceId.prod]: "pro",
        [STRIPE_PLANS.pro.yearlyPriceId.dev]: "pro",
        [STRIPE_PLANS.pro.yearlyPriceId.prod]: "pro",
        [STRIPE_PLANS.business.monthlyPriceId.dev]: "business",
        [STRIPE_PLANS.business.monthlyPriceId.prod]: "business",
        [STRIPE_PLANS.business.yearlyPriceId.dev]: "business",
        [STRIPE_PLANS.business.yearlyPriceId.prod]: "business",
      } as const;

      plan = priceIdToPlan[priceId as keyof typeof priceIdToPlan];

      if (!plan) {
        console.error(`Invalid price ID: ${priceId}`);
        throw new Error(`Invalid price ID: ${priceId}`);
      }

      const customerEmail = session.customer_email;
      if (!customerEmail) {
        throw new Error("No customer email found in session");
      }

      const user = await prisma.user.findFirst({
        where: { email: customerEmail },
      });

      if (!user) {
        throw new Error("User not found");
      }
      await prisma.user.update({
        where: { id: user.id },
        data: {
          plan,
          stripeCustomerId: session.customer as string,
        },
      });
    }

    // Handle subscription updates
    if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object as Stripe.Subscription;
      const priceId = subscription.items.data[0].price.id;

      // Determine the new plan based on price ID
      let plan: "lite" | "pro" | "business" | "enterprise" | "free" = "free";

      // Get all possible price IDs for each plan
      const priceIdToPlan = {
        [STRIPE_PLANS.lite.monthlyPriceId.dev]: "lite",
        [STRIPE_PLANS.lite.monthlyPriceId.prod]: "lite",
        [STRIPE_PLANS.lite.yearlyPriceId.dev]: "lite",
        [STRIPE_PLANS.lite.yearlyPriceId.prod]: "lite",
        [STRIPE_PLANS.pro.monthlyPriceId.dev]: "pro",
        [STRIPE_PLANS.pro.monthlyPriceId.prod]: "pro",
        [STRIPE_PLANS.pro.yearlyPriceId.dev]: "pro",
        [STRIPE_PLANS.pro.yearlyPriceId.prod]: "pro",
        [STRIPE_PLANS.business.monthlyPriceId.dev]: "business",
        [STRIPE_PLANS.business.monthlyPriceId.prod]: "business",
        [STRIPE_PLANS.business.yearlyPriceId.dev]: "business",
        [STRIPE_PLANS.business.yearlyPriceId.prod]: "business",
      } as const;

      plan = priceIdToPlan[priceId as keyof typeof priceIdToPlan];

      if (!plan) {
        console.error(`Invalid price ID: ${priceId}`);
        throw new Error(`Invalid price ID: ${priceId}`);
      }

      const user = await prisma.user.findFirst({
        where: { stripeCustomerId: subscription.customer as string },
      });

      if (!user) {
        throw new Error("User not found");
      }

      await prisma.user.update({
        where: { id: user.id },
        data: {
          plan,
        },
      });
    }

    // Handle subscription deletions
    if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object as Stripe.Subscription;

      const user = await prisma.user.findFirst({
        where: { stripeCustomerId: subscription.customer as string },
      });
      if (!user) {
        throw new Error("User not found");
      }
      await prisma.user.update({
        where: { id: user.id },
        data: {
          plan: "free",
        },
      });
    }

    // Handle failed payments
    if (event.type === "invoice.payment_failed") {
      const invoice = event.data.object as Stripe.Invoice;

      // You might want to notify the user or take other actions
      console.error(`Payment failed for customer ${invoice.customer}`);
    }

    // Handle customer deletion
    if (event.type === "customer.deleted") {
      const customer = event.data.object as Stripe.Customer;

      const user = await prisma.user.findFirst({
        where: { stripeCustomerId: customer.id },
      });
      if (!user) {
        throw new Error("User not found");
      }
      await prisma.user.update({
        where: { id: user.id },
        data: {
          plan: "free",
          stripeCustomerId: null,
        },
      });
    }

    revalidatePath("/");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 400 },
    );
  }
}
