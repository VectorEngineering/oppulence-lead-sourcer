import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema';
import { LeadBudgetCreateWithoutLeadInputSchema } from './LeadBudgetCreateWithoutLeadInputSchema';
import { LeadBudgetUncheckedCreateWithoutLeadInputSchema } from './LeadBudgetUncheckedCreateWithoutLeadInputSchema';

export const LeadBudgetCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadBudgetCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadBudgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadBudgetCreateWithoutLeadInputSchema),z.lazy(() => LeadBudgetUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadBudgetCreateOrConnectWithoutLeadInputSchema;
