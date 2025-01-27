import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRequirementCreateManyInputSchema } from '../inputTypeSchemas/LeadRequirementCreateManyInputSchema'

export const LeadRequirementCreateManyArgsSchema: z.ZodType<Prisma.LeadRequirementCreateManyArgs> = z.object({
  data: z.union([ LeadRequirementCreateManyInputSchema,LeadRequirementCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadRequirementCreateManyArgsSchema;
