import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionEnrichmentWhereUniqueInputSchema } from './TransactionEnrichmentWhereUniqueInputSchema';
import { TransactionEnrichmentCreateWithoutProjectInputSchema } from './TransactionEnrichmentCreateWithoutProjectInputSchema';
import { TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema } from './TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema';

export const TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.TransactionEnrichmentCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionEnrichmentCreateWithoutProjectInputSchema),z.lazy(() => TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema;
