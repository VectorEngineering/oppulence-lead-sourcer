import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveHistoryCreateManyInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryCreateManyInputSchema'

export const LeadCompetitiveHistoryCreateManyArgsSchema: z.ZodType<Prisma.LeadCompetitiveHistoryCreateManyArgs> = z.object({
  data: z.union([ LeadCompetitiveHistoryCreateManyInputSchema,LeadCompetitiveHistoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadCompetitiveHistoryCreateManyArgsSchema;
