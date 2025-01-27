import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"

export const LeadTimelineSelectSchema: z.ZodType<Prisma.LeadTimelineSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  milestone: z.boolean().optional(),
  targetDate: z.boolean().optional(),
  actualDate: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export default LeadTimelineSelectSchema;
