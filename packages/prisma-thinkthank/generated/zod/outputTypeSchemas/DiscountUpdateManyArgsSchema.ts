import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountUpdateManyMutationInputSchema } from '../inputTypeSchemas/DiscountUpdateManyMutationInputSchema'
import { DiscountUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DiscountUncheckedUpdateManyInputSchema'
import { DiscountWhereInputSchema } from '../inputTypeSchemas/DiscountWhereInputSchema'

export const DiscountUpdateManyArgsSchema: z.ZodType<Prisma.DiscountUpdateManyArgs> = z.object({
  data: z.union([ DiscountUpdateManyMutationInputSchema,DiscountUncheckedUpdateManyInputSchema ]),
  where: DiscountWhereInputSchema.optional(),
}).strict() ;

export default DiscountUpdateManyArgsSchema;
