import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealWhereInputSchema } from '../inputTypeSchemas/DealWhereInputSchema'

export const DealDeleteManyArgsSchema: z.ZodType<Prisma.DealDeleteManyArgs> = z.object({
  where: DealWhereInputSchema.optional(),
}).strict() ;

export default DealDeleteManyArgsSchema;
