import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadScoreHistoryUncheckedCreateWithoutLeadScoreInput> = z.object({
  id: z.string().cuid().optional(),
  previousScore: z.number(),
  newScore: z.number(),
  changeReason: z.string().optional().nullable(),
  timestamp: z.coerce.date().optional()
}).strict();

export default LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema;
