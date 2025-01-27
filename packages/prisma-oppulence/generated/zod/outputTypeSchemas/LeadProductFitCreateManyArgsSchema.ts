import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitCreateManyInputSchema } from '../inputTypeSchemas/LeadProductFitCreateManyInputSchema'

export const LeadProductFitCreateManyArgsSchema: z.ZodType<Prisma.LeadProductFitCreateManyArgs> = z.object({
  data: z.union([ LeadProductFitCreateManyInputSchema,LeadProductFitCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadProductFitCreateManyArgsSchema;
