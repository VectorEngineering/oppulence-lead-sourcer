import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadScoreHistoryCreateWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadScoreHistoryCreateWithoutLeadScoreInput> = z.object({
  id: z.string().cuid().optional(),
  previousScore: z.number(),
  newScore: z.number(),
  changeReason: z.string().optional().nullable(),
  timestamp: z.coerce.date().optional()
}).strict();

export default LeadScoreHistoryCreateWithoutLeadScoreInputSchema;
