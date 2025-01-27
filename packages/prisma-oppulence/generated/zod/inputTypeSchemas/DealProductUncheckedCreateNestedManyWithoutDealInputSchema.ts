import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealProductCreateWithoutDealInputSchema } from './DealProductCreateWithoutDealInputSchema';
import { DealProductUncheckedCreateWithoutDealInputSchema } from './DealProductUncheckedCreateWithoutDealInputSchema';
import { DealProductCreateOrConnectWithoutDealInputSchema } from './DealProductCreateOrConnectWithoutDealInputSchema';
import { DealProductCreateManyDealInputEnvelopeSchema } from './DealProductCreateManyDealInputEnvelopeSchema';
import { DealProductWhereUniqueInputSchema } from './DealProductWhereUniqueInputSchema';

export const DealProductUncheckedCreateNestedManyWithoutDealInputSchema: z.ZodType<Prisma.DealProductUncheckedCreateNestedManyWithoutDealInput> = z.object({
  create: z.union([ z.lazy(() => DealProductCreateWithoutDealInputSchema),z.lazy(() => DealProductCreateWithoutDealInputSchema).array(),z.lazy(() => DealProductUncheckedCreateWithoutDealInputSchema),z.lazy(() => DealProductUncheckedCreateWithoutDealInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealProductCreateOrConnectWithoutDealInputSchema),z.lazy(() => DealProductCreateOrConnectWithoutDealInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealProductCreateManyDealInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DealProductWhereUniqueInputSchema),z.lazy(() => DealProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DealProductUncheckedCreateNestedManyWithoutDealInputSchema;
