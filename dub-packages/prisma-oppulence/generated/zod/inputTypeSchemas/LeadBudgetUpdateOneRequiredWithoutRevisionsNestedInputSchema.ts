import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetCreateWithoutRevisionsInputSchema } from './LeadBudgetCreateWithoutRevisionsInputSchema';
import { LeadBudgetUncheckedCreateWithoutRevisionsInputSchema } from './LeadBudgetUncheckedCreateWithoutRevisionsInputSchema';
import { LeadBudgetCreateOrConnectWithoutRevisionsInputSchema } from './LeadBudgetCreateOrConnectWithoutRevisionsInputSchema';
import { LeadBudgetUpsertWithoutRevisionsInputSchema } from './LeadBudgetUpsertWithoutRevisionsInputSchema';
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema';
import { LeadBudgetUpdateToOneWithWhereWithoutRevisionsInputSchema } from './LeadBudgetUpdateToOneWithWhereWithoutRevisionsInputSchema';
import { LeadBudgetUpdateWithoutRevisionsInputSchema } from './LeadBudgetUpdateWithoutRevisionsInputSchema';
import { LeadBudgetUncheckedUpdateWithoutRevisionsInputSchema } from './LeadBudgetUncheckedUpdateWithoutRevisionsInputSchema';

export const LeadBudgetUpdateOneRequiredWithoutRevisionsNestedInputSchema: z.ZodType<Prisma.LeadBudgetUpdateOneRequiredWithoutRevisionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadBudgetCreateWithoutRevisionsInputSchema),z.lazy(() => LeadBudgetUncheckedCreateWithoutRevisionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadBudgetCreateOrConnectWithoutRevisionsInputSchema).optional(),
  upsert: z.lazy(() => LeadBudgetUpsertWithoutRevisionsInputSchema).optional(),
  connect: z.lazy(() => LeadBudgetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadBudgetUpdateToOneWithWhereWithoutRevisionsInputSchema),z.lazy(() => LeadBudgetUpdateWithoutRevisionsInputSchema),z.lazy(() => LeadBudgetUncheckedUpdateWithoutRevisionsInputSchema) ]).optional(),
}).strict();

export default LeadBudgetUpdateOneRequiredWithoutRevisionsNestedInputSchema;
