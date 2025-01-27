import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionEnrichmentSelectSchema } from '../inputTypeSchemas/TransactionEnrichmentSelectSchema';
import { TransactionEnrichmentIncludeSchema } from '../inputTypeSchemas/TransactionEnrichmentIncludeSchema';

export const TransactionEnrichmentArgsSchema: z.ZodType<Prisma.TransactionEnrichmentDefaultArgs> = z.object({
  select: z.lazy(() => TransactionEnrichmentSelectSchema).optional(),
  include: z.lazy(() => TransactionEnrichmentIncludeSchema).optional(),
}).strict();

export default TransactionEnrichmentArgsSchema;
