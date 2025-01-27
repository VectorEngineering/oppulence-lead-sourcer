import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCompetitorCreateWithoutDealInputSchema } from './DealCompetitorCreateWithoutDealInputSchema';
import { DealCompetitorUncheckedCreateWithoutDealInputSchema } from './DealCompetitorUncheckedCreateWithoutDealInputSchema';
import { DealCompetitorCreateOrConnectWithoutDealInputSchema } from './DealCompetitorCreateOrConnectWithoutDealInputSchema';
import { DealCompetitorCreateManyDealInputEnvelopeSchema } from './DealCompetitorCreateManyDealInputEnvelopeSchema';
import { DealCompetitorWhereUniqueInputSchema } from './DealCompetitorWhereUniqueInputSchema';

export const DealCompetitorUncheckedCreateNestedManyWithoutDealInputSchema: z.ZodType<Prisma.DealCompetitorUncheckedCreateNestedManyWithoutDealInput> = z.object({
  create: z.union([ z.lazy(() => DealCompetitorCreateWithoutDealInputSchema),z.lazy(() => DealCompetitorCreateWithoutDealInputSchema).array(),z.lazy(() => DealCompetitorUncheckedCreateWithoutDealInputSchema),z.lazy(() => DealCompetitorUncheckedCreateWithoutDealInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealCompetitorCreateOrConnectWithoutDealInputSchema),z.lazy(() => DealCompetitorCreateOrConnectWithoutDealInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealCompetitorCreateManyDealInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DealCompetitorWhereUniqueInputSchema),z.lazy(() => DealCompetitorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DealCompetitorUncheckedCreateNestedManyWithoutDealInputSchema;
