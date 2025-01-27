import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"

export const LeadContactPreferenceSelectSchema: z.ZodType<Prisma.LeadContactPreferenceSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  method: z.boolean().optional(),
  preferredTime: z.boolean().optional(),
  preferredDays: z.boolean().optional(),
  timezone: z.boolean().optional(),
  notes: z.boolean().optional(),
  isActive: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export default LeadContactPreferenceSelectSchema;
