import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadExternalSystemCreateManyInputSchema } from '../inputTypeSchemas/LeadExternalSystemCreateManyInputSchema'

export const LeadExternalSystemCreateManyArgsSchema: z.ZodType<Prisma.LeadExternalSystemCreateManyArgs> = z.object({
  data: z.union([ LeadExternalSystemCreateManyInputSchema,LeadExternalSystemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadExternalSystemCreateManyArgsSchema;
