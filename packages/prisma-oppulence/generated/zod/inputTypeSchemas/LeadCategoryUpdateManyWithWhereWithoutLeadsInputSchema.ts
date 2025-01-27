import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryScalarWhereInputSchema } from './LeadCategoryScalarWhereInputSchema';
import { LeadCategoryUpdateManyMutationInputSchema } from './LeadCategoryUpdateManyMutationInputSchema';
import { LeadCategoryUncheckedUpdateManyWithoutLeadsInputSchema } from './LeadCategoryUncheckedUpdateManyWithoutLeadsInputSchema';

export const LeadCategoryUpdateManyWithWhereWithoutLeadsInputSchema: z.ZodType<Prisma.LeadCategoryUpdateManyWithWhereWithoutLeadsInput> = z.object({
  where: z.lazy(() => LeadCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadCategoryUpdateManyMutationInputSchema),z.lazy(() => LeadCategoryUncheckedUpdateManyWithoutLeadsInputSchema) ]),
}).strict();

export default LeadCategoryUpdateManyWithWhereWithoutLeadsInputSchema;
