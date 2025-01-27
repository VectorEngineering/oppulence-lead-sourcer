import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadNurturingUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadNurturingUpdateManyMutationInputSchema'
import { LeadNurturingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadNurturingUncheckedUpdateManyInputSchema'
import { LeadNurturingWhereInputSchema } from '../inputTypeSchemas/LeadNurturingWhereInputSchema'

export const LeadNurturingUpdateManyArgsSchema: z.ZodType<Prisma.LeadNurturingUpdateManyArgs> = z.object({
  data: z.union([ LeadNurturingUpdateManyMutationInputSchema,LeadNurturingUncheckedUpdateManyInputSchema ]),
  where: LeadNurturingWhereInputSchema.optional(),
}).strict() ;

export default LeadNurturingUpdateManyArgsSchema;
