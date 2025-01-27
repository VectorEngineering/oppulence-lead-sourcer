import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadUpdateWithoutTouchpointsInputSchema } from './LeadUpdateWithoutTouchpointsInputSchema';
import { LeadUncheckedUpdateWithoutTouchpointsInputSchema } from './LeadUncheckedUpdateWithoutTouchpointsInputSchema';

export const LeadUpdateToOneWithWhereWithoutTouchpointsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutTouchpointsInput> = z.object({
  where: z.lazy(() => LeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadUpdateWithoutTouchpointsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutTouchpointsInputSchema) ]),
}).strict();

export default LeadUpdateToOneWithWhereWithoutTouchpointsInputSchema;
