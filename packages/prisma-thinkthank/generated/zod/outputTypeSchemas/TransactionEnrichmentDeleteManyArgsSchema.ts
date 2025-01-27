import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionEnrichmentWhereInputSchema } from '../inputTypeSchemas/TransactionEnrichmentWhereInputSchema'

export const TransactionEnrichmentDeleteManyArgsSchema: z.ZodType<Prisma.TransactionEnrichmentDeleteManyArgs> = z.object({
  where: TransactionEnrichmentWhereInputSchema.optional(),
}).strict() ;

export default TransactionEnrichmentDeleteManyArgsSchema;
