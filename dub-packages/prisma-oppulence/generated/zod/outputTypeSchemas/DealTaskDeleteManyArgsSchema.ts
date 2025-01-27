import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealTaskWhereInputSchema } from '../inputTypeSchemas/DealTaskWhereInputSchema'

export const DealTaskDeleteManyArgsSchema: z.ZodType<Prisma.DealTaskDeleteManyArgs> = z.object({
  where: DealTaskWhereInputSchema.optional(),
}).strict() ;

export default DealTaskDeleteManyArgsSchema;
