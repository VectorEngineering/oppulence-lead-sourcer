import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetExpenseCreateWithoutBudgetInputSchema } from './LeadBudgetExpenseCreateWithoutBudgetInputSchema';
import { LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema } from './LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema';
import { LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema } from './LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema';
import { LeadBudgetExpenseCreateManyBudgetInputEnvelopeSchema } from './LeadBudgetExpenseCreateManyBudgetInputEnvelopeSchema';
import { LeadBudgetExpenseWhereUniqueInputSchema } from './LeadBudgetExpenseWhereUniqueInputSchema';

export const LeadBudgetExpenseUncheckedCreateNestedManyWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetExpenseUncheckedCreateNestedManyWithoutBudgetInput> = z.object({
  create: z.union([ z.lazy(() => LeadBudgetExpenseCreateWithoutBudgetInputSchema),z.lazy(() => LeadBudgetExpenseCreateWithoutBudgetInputSchema).array(),z.lazy(() => LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema),z.lazy(() => LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema),z.lazy(() => LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadBudgetExpenseCreateManyBudgetInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema),z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadBudgetExpenseUncheckedCreateNestedManyWithoutBudgetInputSchema;
