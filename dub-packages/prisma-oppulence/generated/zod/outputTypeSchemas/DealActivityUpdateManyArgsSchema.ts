import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealActivityUpdateManyMutationInputSchema } from '../inputTypeSchemas/DealActivityUpdateManyMutationInputSchema'
import { DealActivityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DealActivityUncheckedUpdateManyInputSchema'
import { DealActivityWhereInputSchema } from '../inputTypeSchemas/DealActivityWhereInputSchema'

export const DealActivityUpdateManyArgsSchema: z.ZodType<Prisma.DealActivityUpdateManyArgs> = z.object({
  data: z.union([ DealActivityUpdateManyMutationInputSchema,DealActivityUncheckedUpdateManyInputSchema ]),
  where: DealActivityWhereInputSchema.optional(),
}).strict() ;

export default DealActivityUpdateManyArgsSchema;
