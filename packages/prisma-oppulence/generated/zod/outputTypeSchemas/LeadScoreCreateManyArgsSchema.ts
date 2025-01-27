import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreCreateManyInputSchema } from '../inputTypeSchemas/LeadScoreCreateManyInputSchema'

export const LeadScoreCreateManyArgsSchema: z.ZodType<Prisma.LeadScoreCreateManyArgs> = z.object({
  data: z.union([ LeadScoreCreateManyInputSchema,LeadScoreCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadScoreCreateManyArgsSchema;
