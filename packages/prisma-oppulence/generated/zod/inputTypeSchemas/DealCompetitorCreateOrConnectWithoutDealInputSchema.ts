import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCompetitorWhereUniqueInputSchema } from './DealCompetitorWhereUniqueInputSchema';
import { DealCompetitorCreateWithoutDealInputSchema } from './DealCompetitorCreateWithoutDealInputSchema';
import { DealCompetitorUncheckedCreateWithoutDealInputSchema } from './DealCompetitorUncheckedCreateWithoutDealInputSchema';

export const DealCompetitorCreateOrConnectWithoutDealInputSchema: z.ZodType<Prisma.DealCompetitorCreateOrConnectWithoutDealInput> = z.object({
  where: z.lazy(() => DealCompetitorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DealCompetitorCreateWithoutDealInputSchema),z.lazy(() => DealCompetitorUncheckedCreateWithoutDealInputSchema) ]),
}).strict();

export default DealCompetitorCreateOrConnectWithoutDealInputSchema;
