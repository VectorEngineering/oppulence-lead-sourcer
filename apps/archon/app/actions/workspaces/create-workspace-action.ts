"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { prisma } from "@dub/prisma-archon";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const updateWorkspaceSchema = z.object({
  workspaceId: z.string(),
  name: z.string().min(1, "Workspace name is required"),
  description: z.string().optional(),
});

export const updateWorkspace = authenticatedAction
  .metadata({
    name: "update-workspace",
  })
  .schema(updateWorkspaceSchema)
  .action(async ({ parsedInput, ctx: { userId } }) => {
    try {
      // 1. Check if workspace exists and user has permission
      const existingWorkspace = await prisma.workspace.findFirst({
        where: {
          id: parsedInput.workspaceId,
          ownerId: userId,
        },
      });

      if (!existingWorkspace) {
        return {
          success: false,
          error:
            "Workspace not found or you don't have permission to update it",
        };
      }

      // 2. Perform the update (MySQL: returns { rowsAffected, ... })
      const updatedWorkspace = await prisma.workspace.update({
        where: { id: parsedInput.workspaceId },
        data: {
          name: parsedInput.name,
          description: parsedInput.description,
          updatedAt: new Date(),
        },
      });

      if (!updatedWorkspace) {
        return {
          success: false,
          error: "Failed to retrieve updated workspace",
        };
      }

      // 4. Revalidate any relevant Next.js routes
      revalidatePath("/portal");

      return {
        success: true,
        workspace: updatedWorkspace,
      };
    } catch (error) {
      console.error("Failed to update workspace:", error);
      return {
        success: false,
        error: "Failed to update workspace",
      };
    }
  });
