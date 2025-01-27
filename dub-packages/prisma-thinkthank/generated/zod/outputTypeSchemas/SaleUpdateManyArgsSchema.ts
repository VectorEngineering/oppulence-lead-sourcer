import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleUpdateManyMutationInputSchema } from '../inputTypeSchemas/SaleUpdateManyMutationInputSchema'
import { SaleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SaleUncheckedUpdateManyInputSchema'
import { SaleWhereInputSchema } from '../inputTypeSchemas/SaleWhereInputSchema'

export const SaleUpdateManyArgsSchema: z.ZodType<Prisma.SaleUpdateManyArgs> = z.object({
  data: z.union([ SaleUpdateManyMutationInputSchema,SaleUncheckedUpdateManyInputSchema ]),
  where: SaleWhereInputSchema.optional(),
}).strict() ;

export default SaleUpdateManyArgsSchema;
