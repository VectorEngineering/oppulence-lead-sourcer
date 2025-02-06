"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { prisma } from "@dub/prisma-archon";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addWorkspaceSchema = z.object({
  name: z.string().min(1, "Workspace name is required"),
  description: z.string().optional(),
});

export const addWorkspace = authenticatedAction
  .metadata({
    name: "add-workspace",
  })
  .schema(addWorkspaceSchema)
  .action(async ({ parsedInput, ctx: { userId } }) => {
    try {
      // 1. Check if workspace name already exists for this user
      const existingWorkspace = await prisma.workspace.findFirst({
        where: {
          name: parsedInput.name,
          ownerId: userId,
        },
      });

      if (existingWorkspace) {
        return {
          success: false,
          error: "A workspace with this name already exists",
        };
      }

      // 2. Start a transaction for new workspace creation
      return await prisma.$transaction(async (tx) => {
        // (a) Insert the new workspace
        //     For MySQL, Drizzle returns { insertId, rowsAffected }
        const newWorkspace = await tx.workspace.create({
          data: {
            name: parsedInput.name,
            description: parsedInput.description,
            ownerId: userId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });

        // (b) Use insertId to fetch the newly created workspace
        const workspaceId = newWorkspace.id;
        const workspace = await tx.workspace.findUnique({
          where: { id: workspaceId },
        });

        if (!workspace) {
          throw new Error("Failed to fetch newly created workspace");
        }

        // (c) Add the creator as a workspace member with owner role
        await tx.workspaceMember.create({
          data: {
            workspaceId: workspace.id,
            userId,
            role: "owner",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });

        // (d) Revalidate your Next.js path
        revalidatePath("/portal");

        return {
          success: true,
          workspace,
        };
      });
    } catch (error) {
      console.error("Failed to add workspace:", error);
      return {
        success: false,
        error: "Failed to create workspace",
      };
    }
  });
