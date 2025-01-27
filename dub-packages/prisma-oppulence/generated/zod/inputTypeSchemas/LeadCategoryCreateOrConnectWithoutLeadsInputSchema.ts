import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema';
import { LeadCategoryCreateWithoutLeadsInputSchema } from './LeadCategoryCreateWithoutLeadsInputSchema';
import { LeadCategoryUncheckedCreateWithoutLeadsInputSchema } from './LeadCategoryUncheckedCreateWithoutLeadsInputSchema';

export const LeadCategoryCreateOrConnectWithoutLeadsInputSchema: z.ZodType<Prisma.LeadCategoryCreateOrConnectWithoutLeadsInput> = z.object({
  where: z.lazy(() => LeadCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCategoryCreateWithoutLeadsInputSchema),z.lazy(() => LeadCategoryUncheckedCreateWithoutLeadsInputSchema) ]),
}).strict();

export default LeadCategoryCreateOrConnectWithoutLeadsInputSchema;
