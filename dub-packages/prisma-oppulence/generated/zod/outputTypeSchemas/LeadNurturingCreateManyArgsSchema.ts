import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadNurturingCreateManyInputSchema } from '../inputTypeSchemas/LeadNurturingCreateManyInputSchema'

export const LeadNurturingCreateManyArgsSchema: z.ZodType<Prisma.LeadNurturingCreateManyArgs> = z.object({
  data: z.union([ LeadNurturingCreateManyInputSchema,LeadNurturingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadNurturingCreateManyArgsSchema;
