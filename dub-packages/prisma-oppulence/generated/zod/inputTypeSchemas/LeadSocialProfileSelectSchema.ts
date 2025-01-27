import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"

export const LeadSocialProfileSelectSchema: z.ZodType<Prisma.LeadSocialProfileSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  platform: z.boolean().optional(),
  profileUrl: z.boolean().optional(),
  username: z.boolean().optional(),
  lastSynced: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export default LeadSocialProfileSelectSchema;
