import { z } from "zod";

export const UserMetadataSchema = z.object({
  onboardingComplete: z.boolean().optional(),
  hasProfile: z.boolean().optional(),
  hasWorkspace: z.boolean().optional(),
});

export type UserMetadata = z.infer<typeof UserMetadataSchema>;
