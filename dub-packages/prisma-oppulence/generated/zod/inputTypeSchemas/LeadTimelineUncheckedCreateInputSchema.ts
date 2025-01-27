import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadTimelineUncheckedCreateInputSchema: z.ZodType<Prisma.LeadTimelineUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  milestone: z.string(),
  targetDate: z.coerce.date(),
  actualDate: z.coerce.date().optional().nullable(),
  status: z.string(),
  notes: z.string().optional().nullable()
}).strict();

export default LeadTimelineUncheckedCreateInputSchema;
