import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTaskUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadTaskUpdateManyMutationInputSchema'
import { LeadTaskUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadTaskUncheckedUpdateManyInputSchema'
import { LeadTaskWhereInputSchema } from '../inputTypeSchemas/LeadTaskWhereInputSchema'

export const LeadTaskUpdateManyArgsSchema: z.ZodType<Prisma.LeadTaskUpdateManyArgs> = z.object({
  data: z.union([ LeadTaskUpdateManyMutationInputSchema,LeadTaskUncheckedUpdateManyInputSchema ]),
  where: LeadTaskWhereInputSchema.optional(),
}).strict() ;

export default LeadTaskUpdateManyArgsSchema;
