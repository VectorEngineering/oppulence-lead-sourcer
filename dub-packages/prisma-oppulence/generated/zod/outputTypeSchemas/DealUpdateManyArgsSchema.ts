import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealUpdateManyMutationInputSchema } from '../inputTypeSchemas/DealUpdateManyMutationInputSchema'
import { DealUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DealUncheckedUpdateManyInputSchema'
import { DealWhereInputSchema } from '../inputTypeSchemas/DealWhereInputSchema'

export const DealUpdateManyArgsSchema: z.ZodType<Prisma.DealUpdateManyArgs> = z.object({
  data: z.union([ DealUpdateManyMutationInputSchema,DealUncheckedUpdateManyInputSchema ]),
  where: DealWhereInputSchema.optional(),
}).strict() ;

export default DealUpdateManyArgsSchema;
