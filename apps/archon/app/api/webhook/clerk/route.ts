import type { WebhookEvent } from "@clerk/nextjs/server";
import { prisma } from "@dub/prisma-archon";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
  try {
    console.log("🚀 Webhook endpoint hit");

    // Get the headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    console.log("📝 Headers received:", {
      svix_id,
      svix_timestamp,
      svix_signature: svix_signature ? "present" : "missing",
    });

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      console.error("❌ Missing svix headers:", {
        svix_id,
        svix_timestamp,
        svix_signature,
      });
      return new Response("Error occurred -- no svix headers", {
        status: 400,
      });
    }

    // Get the body
    const payload = await req.json();
    console.log("📦 Raw webhook payload:", JSON.stringify(payload, null, 2));

    // Check webhook secret
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    console.log("🔑 Webhook secret:", webhookSecret ? "present" : "missing");

    if (!webhookSecret) {
      console.error("❌ No webhook secret found in environment variables");
      return new Response("Webhook secret not configured", {
        status: 500,
      });
    }

    // Create a new Svix instance with your webhook secret
    const wh = new Webhook(webhookSecret);

    let evt: WebhookEvent;

    // Verify the webhook
    try {
      evt = wh.verify(JSON.stringify(payload), {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
      console.log("✅ Webhook verified successfully");
      console.log("📣 Event type:", evt.type);
      console.log("🔍 Event data:", JSON.stringify(evt.data, null, 2));
    } catch (err) {
      console.error("❌ Error verifying webhook:", err);
      return new Response("Error verifying webhook signature", {
        status: 400,
      });
    }

    // Handle the webhook
    const eventType = evt.type;

    if (eventType === "user.created") {
      const {
        id,
        email_addresses,
        first_name,
        last_name,
        image_url,
        username,
        has_image,
        last_sign_in_at,
        last_active_at,
        banned,
        password_enabled,
        two_factor_enabled,
        public_metadata,
        private_metadata,
        unsafe_metadata,
      } = evt.data;

      console.log("👤 Processing user creation:", {
        id,
        email_addresses,
        first_name,
        last_name,
      });

      const primaryEmail = email_addresses[0]?.email_address;
      const emailVerified =
        email_addresses[0]?.verification?.status === "verified";

      if (!primaryEmail) {
        console.error("❌ No primary email found for user:", id);
        return new Response("No email address found", { status: 400 });
      }

      try {
        console.log("💾 Attempting to insert user into database:", {
          id,
          email: primaryEmail,
          firstName: first_name || null,
          lastName: last_name || null,
          imageUrl: image_url || null,
          username: username || null,
          profileImageUrl: image_url || null,
          hasImage: has_image || false,
          lastSignInAt: last_sign_in_at ? new Date(last_sign_in_at) : null,
          lastActiveAt: last_active_at ? new Date(last_active_at) : null,
          banned: banned || false,
          passwordEnabled: password_enabled || false,
          twoFactorEnabled: two_factor_enabled || false,
          publicMetadata: public_metadata || {},
          privateMetadata: private_metadata || {},
          unsafeMetadata: unsafe_metadata || {},
          emailVerified,
        });

        const result = await prisma.user.create({
          data: {
            id,
            email: primaryEmail,
            firstName: first_name || null,
            lastName: last_name || null,
            imageUrl: image_url || null,
            username: username || null,
            profileImageUrl: image_url || null,
            hasImage: has_image || false,
            lastSignInAt: last_sign_in_at ? new Date(last_sign_in_at) : null,
            lastActiveAt: last_active_at ? new Date(last_active_at) : null,
            banned: banned || false,
            passwordEnabled: password_enabled || false,
            twoFactorEnabled: two_factor_enabled || false,
            emailVerified,
          },
        });

        console.log("✅ User created successfully in database", result);
        return new Response("User created", { status: 201 });
      } catch (err) {
        console.error("❌ Database error creating user:", err);
        return new Response("Error creating user", { status: 500 });
      }
    }

    if (eventType === "user.updated") {
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data;
      console.log("📝 Processing user update:", {
        id,
        email_addresses,
        first_name,
        last_name,
      });

      const primaryEmail = email_addresses[0]?.email_address;
      if (!primaryEmail) {
        console.error("❌ No primary email found for user:", id);
        return new Response("No email address found", { status: 400 });
      }

      try {
        console.log("💾 Attempting to update user in database:", {
          id,
          email: primaryEmail,
          firstName: first_name || null,
          lastName: last_name || null,
          imageUrl: image_url || null,
        });

        const result = await prisma.user.update({
          where: {
            id,
          },
          data: {
            email: primaryEmail,
            firstName: first_name || null,
            lastName: last_name || null,
            imageUrl: image_url || null,
          },
        });

        console.log("✅ Database update result:", result);
        return new Response("User updated", { status: 200 });
      } catch (err) {
        console.error("❌ Database error updating user:", err);
        return new Response("Error updating user", { status: 500 });
      }
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;
      console.log("🗑️ Processing user deletion:", id);

      try {
        if (!id) {
          console.error("❌ No user ID provided for deletion");
          return new Response("No user ID provided", { status: 400 });
        }

        console.log("💾 Attempting to delete user from database:", id);
        const result = await prisma.user.delete({
          where: {
            id: id as string,
          },
        });
        console.log("✅ Database deletion result:", result);

        return new Response("User deleted", { status: 200 });
      } catch (err) {
        console.error("❌ Database error deleting user:", err);
        return new Response("Error deleting user", { status: 500 });
      }
    }

    console.log("✨ Webhook processed successfully");
    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("❌ Unexpected error in webhook handler:", err);
    return new Response("Internal server error", { status: 500 });
  }
}
