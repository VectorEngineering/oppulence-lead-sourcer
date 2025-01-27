import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompanyDetailsCreateManyInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsCreateManyInputSchema'

export const LeadCompanyDetailsCreateManyArgsSchema: z.ZodType<Prisma.LeadCompanyDetailsCreateManyArgs> = z.object({
  data: z.union([ LeadCompanyDetailsCreateManyInputSchema,LeadCompanyDetailsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadCompanyDetailsCreateManyArgsSchema;
