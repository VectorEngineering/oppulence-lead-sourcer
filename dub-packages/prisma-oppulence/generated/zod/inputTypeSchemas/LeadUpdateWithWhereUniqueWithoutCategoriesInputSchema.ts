import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateWithoutCategoriesInputSchema } from './LeadUpdateWithoutCategoriesInputSchema';
import { LeadUncheckedUpdateWithoutCategoriesInputSchema } from './LeadUncheckedUpdateWithoutCategoriesInputSchema';

export const LeadUpdateWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.LeadUpdateWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateWithoutCategoriesInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export default LeadUpdateWithWhereUniqueWithoutCategoriesInputSchema;
