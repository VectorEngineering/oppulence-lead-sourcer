import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionEnrichmentScalarWhereInputSchema } from './TransactionEnrichmentScalarWhereInputSchema';
import { TransactionEnrichmentUpdateManyMutationInputSchema } from './TransactionEnrichmentUpdateManyMutationInputSchema';
import { TransactionEnrichmentUncheckedUpdateManyWithoutProjectInputSchema } from './TransactionEnrichmentUncheckedUpdateManyWithoutProjectInputSchema';

export const TransactionEnrichmentUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.TransactionEnrichmentUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => TransactionEnrichmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionEnrichmentUpdateManyMutationInputSchema),z.lazy(() => TransactionEnrichmentUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default TransactionEnrichmentUpdateManyWithWhereWithoutProjectInputSchema;
