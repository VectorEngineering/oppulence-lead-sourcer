import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadBudgetInputSchema } from './LeadCreateWithoutLeadBudgetInputSchema';
import { LeadUncheckedCreateWithoutLeadBudgetInputSchema } from './LeadUncheckedCreateWithoutLeadBudgetInputSchema';
import { LeadCreateOrConnectWithoutLeadBudgetInputSchema } from './LeadCreateOrConnectWithoutLeadBudgetInputSchema';
import { LeadUpsertWithoutLeadBudgetInputSchema } from './LeadUpsertWithoutLeadBudgetInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutLeadBudgetInputSchema } from './LeadUpdateToOneWithWhereWithoutLeadBudgetInputSchema';
import { LeadUpdateWithoutLeadBudgetInputSchema } from './LeadUpdateWithoutLeadBudgetInputSchema';
import { LeadUncheckedUpdateWithoutLeadBudgetInputSchema } from './LeadUncheckedUpdateWithoutLeadBudgetInputSchema';

export const LeadUpdateOneRequiredWithoutLeadBudgetNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLeadBudgetNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadBudgetInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadBudgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadBudgetInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutLeadBudgetInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutLeadBudgetInputSchema),z.lazy(() => LeadUpdateWithoutLeadBudgetInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadBudgetInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutLeadBudgetNestedInputSchema;
