import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetWhereInputSchema } from './LeadBudgetWhereInputSchema';
import { LeadBudgetUpdateWithoutRevisionsInputSchema } from './LeadBudgetUpdateWithoutRevisionsInputSchema';
import { LeadBudgetUncheckedUpdateWithoutRevisionsInputSchema } from './LeadBudgetUncheckedUpdateWithoutRevisionsInputSchema';

export const LeadBudgetUpdateToOneWithWhereWithoutRevisionsInputSchema: z.ZodType<Prisma.LeadBudgetUpdateToOneWithWhereWithoutRevisionsInput> = z.object({
  where: z.lazy(() => LeadBudgetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadBudgetUpdateWithoutRevisionsInputSchema),z.lazy(() => LeadBudgetUncheckedUpdateWithoutRevisionsInputSchema) ]),
}).strict();

export default LeadBudgetUpdateToOneWithWhereWithoutRevisionsInputSchema;
