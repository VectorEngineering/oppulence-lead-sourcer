import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadScoreHistoryCreateManyInputSchema: z.ZodType<Prisma.LeadScoreHistoryCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  leadScoreId: z.string(),
  previousScore: z.number(),
  newScore: z.number(),
  changeReason: z.string().optional().nullable(),
  timestamp: z.coerce.date().optional()
}).strict();

export default LeadScoreHistoryCreateManyInputSchema;
