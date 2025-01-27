import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadScoreHistoryUncheckedCreateInputSchema: z.ZodType<Prisma.LeadScoreHistoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  leadScoreId: z.string(),
  previousScore: z.number(),
  newScore: z.number(),
  changeReason: z.string().optional().nullable(),
  timestamp: z.coerce.date().optional()
}).strict();

export default LeadScoreHistoryUncheckedCreateInputSchema;
