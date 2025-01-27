import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryCreateWithoutParentInputSchema } from './TransactionCategoryCreateWithoutParentInputSchema';
import { TransactionCategoryUncheckedCreateWithoutParentInputSchema } from './TransactionCategoryUncheckedCreateWithoutParentInputSchema';
import { TransactionCategoryCreateOrConnectWithoutParentInputSchema } from './TransactionCategoryCreateOrConnectWithoutParentInputSchema';
import { TransactionCategoryCreateManyParentInputEnvelopeSchema } from './TransactionCategoryCreateManyParentInputEnvelopeSchema';
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema';

export const TransactionCategoryUncheckedCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.TransactionCategoryUncheckedCreateNestedManyWithoutParentInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCategoryCreateWithoutParentInputSchema),z.lazy(() => TransactionCategoryCreateWithoutParentInputSchema).array(),z.lazy(() => TransactionCategoryUncheckedCreateWithoutParentInputSchema),z.lazy(() => TransactionCategoryUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCategoryCreateOrConnectWithoutParentInputSchema),z.lazy(() => TransactionCategoryCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCategoryCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionCategoryWhereUniqueInputSchema),z.lazy(() => TransactionCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TransactionCategoryUncheckedCreateNestedManyWithoutParentInputSchema;
