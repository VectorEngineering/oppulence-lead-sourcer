import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealActivityCreateWithoutDealInputSchema } from './DealActivityCreateWithoutDealInputSchema';
import { DealActivityUncheckedCreateWithoutDealInputSchema } from './DealActivityUncheckedCreateWithoutDealInputSchema';
import { DealActivityCreateOrConnectWithoutDealInputSchema } from './DealActivityCreateOrConnectWithoutDealInputSchema';
import { DealActivityCreateManyDealInputEnvelopeSchema } from './DealActivityCreateManyDealInputEnvelopeSchema';
import { DealActivityWhereUniqueInputSchema } from './DealActivityWhereUniqueInputSchema';

export const DealActivityCreateNestedManyWithoutDealInputSchema: z.ZodType<Prisma.DealActivityCreateNestedManyWithoutDealInput> = z.object({
  create: z.union([ z.lazy(() => DealActivityCreateWithoutDealInputSchema),z.lazy(() => DealActivityCreateWithoutDealInputSchema).array(),z.lazy(() => DealActivityUncheckedCreateWithoutDealInputSchema),z.lazy(() => DealActivityUncheckedCreateWithoutDealInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealActivityCreateOrConnectWithoutDealInputSchema),z.lazy(() => DealActivityCreateOrConnectWithoutDealInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealActivityCreateManyDealInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DealActivityWhereUniqueInputSchema),z.lazy(() => DealActivityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DealActivityCreateNestedManyWithoutDealInputSchema;
