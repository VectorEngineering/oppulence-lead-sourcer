import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetCreateWithoutLeadInputSchema } from './LeadBudgetCreateWithoutLeadInputSchema';
import { LeadBudgetUncheckedCreateWithoutLeadInputSchema } from './LeadBudgetUncheckedCreateWithoutLeadInputSchema';
import { LeadBudgetCreateOrConnectWithoutLeadInputSchema } from './LeadBudgetCreateOrConnectWithoutLeadInputSchema';
import { LeadBudgetCreateManyLeadInputEnvelopeSchema } from './LeadBudgetCreateManyLeadInputEnvelopeSchema';
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema';

export const LeadBudgetUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadBudgetUncheckedCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadBudgetCreateWithoutLeadInputSchema),z.lazy(() => LeadBudgetCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadBudgetUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadBudgetUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadBudgetCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadBudgetCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadBudgetCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadBudgetWhereUniqueInputSchema),z.lazy(() => LeadBudgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadBudgetUncheckedCreateNestedManyWithoutLeadInputSchema;
