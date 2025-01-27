import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCreateManyInputSchema } from '../inputTypeSchemas/LeadCreateManyInputSchema'

export const LeadCreateManyArgsSchema: z.ZodType<Prisma.LeadCreateManyArgs> = z.object({
  data: z.union([ LeadCreateManyInputSchema,LeadCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadCreateManyArgsSchema;
