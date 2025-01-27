import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreHistoryCreateManyInputSchema } from '../inputTypeSchemas/LeadScoreHistoryCreateManyInputSchema'

export const LeadScoreHistoryCreateManyArgsSchema: z.ZodType<Prisma.LeadScoreHistoryCreateManyArgs> = z.object({
  data: z.union([ LeadScoreHistoryCreateManyInputSchema,LeadScoreHistoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadScoreHistoryCreateManyArgsSchema;
