import { z } from "zod";

export const getLeadCountSchema = z.object({
  endpointId: z.string(),
});

export const getUserPlanSchema = z.object({
  endpointId: z.string(),
});

export const incrementLeadCountSchema = z.object({
  endpointId: z.string(),
});

export const updateUserMetadataSchema = z.object({
  data: z.object({
    onboardingComplete: z.boolean().optional(),
    hasProfile: z.boolean().optional(),
    hasWorkspace: z.boolean().optional(),
  }),
});

export const updateAccountSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  role: z.string().min(1, "Role is required"),
});
