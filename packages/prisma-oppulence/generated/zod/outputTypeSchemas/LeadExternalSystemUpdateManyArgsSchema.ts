import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadExternalSystemUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadExternalSystemUpdateManyMutationInputSchema'
import { LeadExternalSystemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadExternalSystemUncheckedUpdateManyInputSchema'
import { LeadExternalSystemWhereInputSchema } from '../inputTypeSchemas/LeadExternalSystemWhereInputSchema'

export const LeadExternalSystemUpdateManyArgsSchema: z.ZodType<Prisma.LeadExternalSystemUpdateManyArgs> = z.object({
  data: z.union([ LeadExternalSystemUpdateManyMutationInputSchema,LeadExternalSystemUncheckedUpdateManyInputSchema ]),
  where: LeadExternalSystemWhereInputSchema.optional(),
}).strict() ;

export default LeadExternalSystemUpdateManyArgsSchema;
