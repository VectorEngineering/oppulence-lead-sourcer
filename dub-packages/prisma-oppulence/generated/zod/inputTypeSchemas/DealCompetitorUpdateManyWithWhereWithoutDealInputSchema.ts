import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCompetitorScalarWhereInputSchema } from './DealCompetitorScalarWhereInputSchema';
import { DealCompetitorUpdateManyMutationInputSchema } from './DealCompetitorUpdateManyMutationInputSchema';
import { DealCompetitorUncheckedUpdateManyWithoutDealInputSchema } from './DealCompetitorUncheckedUpdateManyWithoutDealInputSchema';

export const DealCompetitorUpdateManyWithWhereWithoutDealInputSchema: z.ZodType<Prisma.DealCompetitorUpdateManyWithWhereWithoutDealInput> = z.object({
  where: z.lazy(() => DealCompetitorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealCompetitorUpdateManyMutationInputSchema),z.lazy(() => DealCompetitorUncheckedUpdateManyWithoutDealInputSchema) ]),
}).strict();

export default DealCompetitorUpdateManyWithWhereWithoutDealInputSchema;
