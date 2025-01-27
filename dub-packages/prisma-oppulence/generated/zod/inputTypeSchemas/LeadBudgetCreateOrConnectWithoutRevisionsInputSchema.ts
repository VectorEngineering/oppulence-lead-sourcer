import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema';
import { LeadBudgetCreateWithoutRevisionsInputSchema } from './LeadBudgetCreateWithoutRevisionsInputSchema';
import { LeadBudgetUncheckedCreateWithoutRevisionsInputSchema } from './LeadBudgetUncheckedCreateWithoutRevisionsInputSchema';

export const LeadBudgetCreateOrConnectWithoutRevisionsInputSchema: z.ZodType<Prisma.LeadBudgetCreateOrConnectWithoutRevisionsInput> = z.object({
  where: z.lazy(() => LeadBudgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadBudgetCreateWithoutRevisionsInputSchema),z.lazy(() => LeadBudgetUncheckedCreateWithoutRevisionsInputSchema) ]),
}).strict();

export default LeadBudgetCreateOrConnectWithoutRevisionsInputSchema;
