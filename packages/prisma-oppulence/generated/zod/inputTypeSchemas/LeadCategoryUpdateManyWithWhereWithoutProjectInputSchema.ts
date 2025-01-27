import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryScalarWhereInputSchema } from './LeadCategoryScalarWhereInputSchema';
import { LeadCategoryUpdateManyMutationInputSchema } from './LeadCategoryUpdateManyMutationInputSchema';
import { LeadCategoryUncheckedUpdateManyWithoutProjectInputSchema } from './LeadCategoryUncheckedUpdateManyWithoutProjectInputSchema';

export const LeadCategoryUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.LeadCategoryUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => LeadCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadCategoryUpdateManyMutationInputSchema),z.lazy(() => LeadCategoryUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default LeadCategoryUpdateManyWithWhereWithoutProjectInputSchema;
