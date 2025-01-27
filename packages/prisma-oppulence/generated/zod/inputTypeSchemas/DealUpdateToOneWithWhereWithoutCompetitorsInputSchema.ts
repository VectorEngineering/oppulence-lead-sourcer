import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereInputSchema } from './DealWhereInputSchema';
import { DealUpdateWithoutCompetitorsInputSchema } from './DealUpdateWithoutCompetitorsInputSchema';
import { DealUncheckedUpdateWithoutCompetitorsInputSchema } from './DealUncheckedUpdateWithoutCompetitorsInputSchema';

export const DealUpdateToOneWithWhereWithoutCompetitorsInputSchema: z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutCompetitorsInput> = z.object({
  where: z.lazy(() => DealWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DealUpdateWithoutCompetitorsInputSchema),z.lazy(() => DealUncheckedUpdateWithoutCompetitorsInputSchema) ]),
}).strict();

export default DealUpdateToOneWithWhereWithoutCompetitorsInputSchema;
