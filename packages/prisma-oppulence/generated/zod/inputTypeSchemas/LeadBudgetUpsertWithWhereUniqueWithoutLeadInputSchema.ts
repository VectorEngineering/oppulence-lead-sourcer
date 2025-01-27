import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema';
import { LeadBudgetUpdateWithoutLeadInputSchema } from './LeadBudgetUpdateWithoutLeadInputSchema';
import { LeadBudgetUncheckedUpdateWithoutLeadInputSchema } from './LeadBudgetUncheckedUpdateWithoutLeadInputSchema';
import { LeadBudgetCreateWithoutLeadInputSchema } from './LeadBudgetCreateWithoutLeadInputSchema';
import { LeadBudgetUncheckedCreateWithoutLeadInputSchema } from './LeadBudgetUncheckedCreateWithoutLeadInputSchema';

export const LeadBudgetUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadBudgetUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadBudgetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadBudgetUpdateWithoutLeadInputSchema),z.lazy(() => LeadBudgetUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadBudgetCreateWithoutLeadInputSchema),z.lazy(() => LeadBudgetUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadBudgetUpsertWithWhereUniqueWithoutLeadInputSchema;
