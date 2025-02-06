import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionEnrichmentCreateWithoutProjectInputSchema } from './TransactionEnrichmentCreateWithoutProjectInputSchema';
import { TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema } from './TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema';
import { TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema } from './TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema';
import { TransactionEnrichmentCreateManyProjectInputEnvelopeSchema } from './TransactionEnrichmentCreateManyProjectInputEnvelopeSchema';
import { TransactionEnrichmentWhereUniqueInputSchema } from './TransactionEnrichmentWhereUniqueInputSchema';

export const TransactionEnrichmentUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.TransactionEnrichmentUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => TransactionEnrichmentCreateWithoutProjectInputSchema),z.lazy(() => TransactionEnrichmentCreateWithoutProjectInputSchema).array(),z.lazy(() => TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionEnrichmentCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema),z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TransactionEnrichmentUncheckedCreateNestedManyWithoutProjectInputSchema;
