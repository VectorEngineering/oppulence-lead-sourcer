import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateWithoutProjectInputSchema } from './LeadUpdateWithoutProjectInputSchema';
import { LeadUncheckedUpdateWithoutProjectInputSchema } from './LeadUncheckedUpdateWithoutProjectInputSchema';

export const LeadUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.LeadUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateWithoutProjectInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default LeadUpdateWithWhereUniqueWithoutProjectInputSchema;
