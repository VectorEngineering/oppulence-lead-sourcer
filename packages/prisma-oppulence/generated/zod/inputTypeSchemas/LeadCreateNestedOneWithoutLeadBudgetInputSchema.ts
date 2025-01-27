import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadBudgetInputSchema } from './LeadCreateWithoutLeadBudgetInputSchema';
import { LeadUncheckedCreateWithoutLeadBudgetInputSchema } from './LeadUncheckedCreateWithoutLeadBudgetInputSchema';
import { LeadCreateOrConnectWithoutLeadBudgetInputSchema } from './LeadCreateOrConnectWithoutLeadBudgetInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutLeadBudgetInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLeadBudgetInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadBudgetInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadBudgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadBudgetInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutLeadBudgetInputSchema;
