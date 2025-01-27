import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreHistorySelectSchema } from '../inputTypeSchemas/LeadScoreHistorySelectSchema';
import { LeadScoreHistoryIncludeSchema } from '../inputTypeSchemas/LeadScoreHistoryIncludeSchema';

export const LeadScoreHistoryArgsSchema: z.ZodType<Prisma.LeadScoreHistoryDefaultArgs> = z.object({
  select: z.lazy(() => LeadScoreHistorySelectSchema).optional(),
  include: z.lazy(() => LeadScoreHistoryIncludeSchema).optional(),
}).strict();

export default LeadScoreHistoryArgsSchema;
