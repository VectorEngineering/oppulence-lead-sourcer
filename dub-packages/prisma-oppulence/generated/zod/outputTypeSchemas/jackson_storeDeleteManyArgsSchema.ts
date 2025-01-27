import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_storeWhereInputSchema } from '../inputTypeSchemas/jackson_storeWhereInputSchema'

export const jackson_storeDeleteManyArgsSchema: z.ZodType<Prisma.jackson_storeDeleteManyArgs> = z.object({
  where: jackson_storeWhereInputSchema.optional(),
}).strict() ;

export default jackson_storeDeleteManyArgsSchema;
