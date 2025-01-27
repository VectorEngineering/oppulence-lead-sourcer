import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreCreateNestedOneWithoutScoreHistoryInputSchema } from './LeadScoreCreateNestedOneWithoutScoreHistoryInputSchema';

export const LeadScoreHistoryCreateInputSchema: z.ZodType<Prisma.LeadScoreHistoryCreateInput> = z.object({
  id: z.string().cuid().optional(),
  previousScore: z.number(),
  newScore: z.number(),
  changeReason: z.string().optional().nullable(),
  timestamp: z.coerce.date().optional(),
  leadScore: z.lazy(() => LeadScoreCreateNestedOneWithoutScoreHistoryInputSchema)
}).strict();

export default LeadScoreHistoryCreateInputSchema;
