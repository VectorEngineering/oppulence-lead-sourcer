import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadHistoryWhereUniqueInputSchema } from './LeadHistoryWhereUniqueInputSchema';
import { LeadHistoryUpdateWithoutLeadInputSchema } from './LeadHistoryUpdateWithoutLeadInputSchema';
import { LeadHistoryUncheckedUpdateWithoutLeadInputSchema } from './LeadHistoryUncheckedUpdateWithoutLeadInputSchema';
import { LeadHistoryCreateWithoutLeadInputSchema } from './LeadHistoryCreateWithoutLeadInputSchema';
import { LeadHistoryUncheckedCreateWithoutLeadInputSchema } from './LeadHistoryUncheckedCreateWithoutLeadInputSchema';

export const LeadHistoryUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadHistoryUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadHistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadHistoryUpdateWithoutLeadInputSchema),z.lazy(() => LeadHistoryUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadHistoryCreateWithoutLeadInputSchema),z.lazy(() => LeadHistoryUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadHistoryUpsertWithWhereUniqueWithoutLeadInputSchema;
