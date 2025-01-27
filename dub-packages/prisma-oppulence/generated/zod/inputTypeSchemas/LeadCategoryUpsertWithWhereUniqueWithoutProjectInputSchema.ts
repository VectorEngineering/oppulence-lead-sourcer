import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema';
import { LeadCategoryUpdateWithoutProjectInputSchema } from './LeadCategoryUpdateWithoutProjectInputSchema';
import { LeadCategoryUncheckedUpdateWithoutProjectInputSchema } from './LeadCategoryUncheckedUpdateWithoutProjectInputSchema';
import { LeadCategoryCreateWithoutProjectInputSchema } from './LeadCategoryCreateWithoutProjectInputSchema';
import { LeadCategoryUncheckedCreateWithoutProjectInputSchema } from './LeadCategoryUncheckedCreateWithoutProjectInputSchema';

export const LeadCategoryUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.LeadCategoryUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => LeadCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadCategoryUpdateWithoutProjectInputSchema),z.lazy(() => LeadCategoryUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCategoryCreateWithoutProjectInputSchema),z.lazy(() => LeadCategoryUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default LeadCategoryUpsertWithWhereUniqueWithoutProjectInputSchema;
