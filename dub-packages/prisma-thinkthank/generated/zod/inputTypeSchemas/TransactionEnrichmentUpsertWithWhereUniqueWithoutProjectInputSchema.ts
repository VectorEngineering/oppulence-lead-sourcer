import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionEnrichmentWhereUniqueInputSchema } from './TransactionEnrichmentWhereUniqueInputSchema';
import { TransactionEnrichmentUpdateWithoutProjectInputSchema } from './TransactionEnrichmentUpdateWithoutProjectInputSchema';
import { TransactionEnrichmentUncheckedUpdateWithoutProjectInputSchema } from './TransactionEnrichmentUncheckedUpdateWithoutProjectInputSchema';
import { TransactionEnrichmentCreateWithoutProjectInputSchema } from './TransactionEnrichmentCreateWithoutProjectInputSchema';
import { TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema } from './TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema';

export const TransactionEnrichmentUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TransactionEnrichmentUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionEnrichmentUpdateWithoutProjectInputSchema),z.lazy(() => TransactionEnrichmentUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionEnrichmentCreateWithoutProjectInputSchema),z.lazy(() => TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default TransactionEnrichmentUpsertWithWhereUniqueWithoutProjectInputSchema;
