import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetCreateWithoutRevisionsInputSchema } from './LeadBudgetCreateWithoutRevisionsInputSchema';
import { LeadBudgetUncheckedCreateWithoutRevisionsInputSchema } from './LeadBudgetUncheckedCreateWithoutRevisionsInputSchema';
import { LeadBudgetCreateOrConnectWithoutRevisionsInputSchema } from './LeadBudgetCreateOrConnectWithoutRevisionsInputSchema';
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema';

export const LeadBudgetCreateNestedOneWithoutRevisionsInputSchema: z.ZodType<Prisma.LeadBudgetCreateNestedOneWithoutRevisionsInput> = z.object({
  create: z.union([ z.lazy(() => LeadBudgetCreateWithoutRevisionsInputSchema),z.lazy(() => LeadBudgetUncheckedCreateWithoutRevisionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadBudgetCreateOrConnectWithoutRevisionsInputSchema).optional(),
  connect: z.lazy(() => LeadBudgetWhereUniqueInputSchema).optional()
}).strict();

export default LeadBudgetCreateNestedOneWithoutRevisionsInputSchema;
