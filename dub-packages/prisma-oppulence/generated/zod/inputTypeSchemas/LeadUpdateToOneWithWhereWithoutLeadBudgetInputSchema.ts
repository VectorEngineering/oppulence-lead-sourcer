import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadUpdateWithoutLeadBudgetInputSchema } from './LeadUpdateWithoutLeadBudgetInputSchema';
import { LeadUncheckedUpdateWithoutLeadBudgetInputSchema } from './LeadUncheckedUpdateWithoutLeadBudgetInputSchema';

export const LeadUpdateToOneWithWhereWithoutLeadBudgetInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLeadBudgetInput> = z.object({
  where: z.lazy(() => LeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadUpdateWithoutLeadBudgetInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadBudgetInputSchema) ]),
}).strict();

export default LeadUpdateToOneWithWhereWithoutLeadBudgetInputSchema;
