import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleWhereInputSchema } from '../inputTypeSchemas/SaleWhereInputSchema'

export const SaleDeleteManyArgsSchema: z.ZodType<Prisma.SaleDeleteManyArgs> = z.object({
  where: SaleWhereInputSchema.optional(),
}).strict() ;

export default SaleDeleteManyArgsSchema;
