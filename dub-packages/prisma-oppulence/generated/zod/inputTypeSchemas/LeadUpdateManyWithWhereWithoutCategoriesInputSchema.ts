import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema';
import { LeadUpdateManyMutationInputSchema } from './LeadUpdateManyMutationInputSchema';
import { LeadUncheckedUpdateManyWithoutCategoriesInputSchema } from './LeadUncheckedUpdateManyWithoutCategoriesInputSchema';

export const LeadUpdateManyWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.LeadUpdateManyWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => LeadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateManyMutationInputSchema),z.lazy(() => LeadUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export default LeadUpdateManyWithWhereWithoutCategoriesInputSchema;
