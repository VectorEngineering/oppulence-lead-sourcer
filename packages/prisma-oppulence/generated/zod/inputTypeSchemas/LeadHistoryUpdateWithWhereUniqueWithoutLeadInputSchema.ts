import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadHistoryWhereUniqueInputSchema } from './LeadHistoryWhereUniqueInputSchema';
import { LeadHistoryUpdateWithoutLeadInputSchema } from './LeadHistoryUpdateWithoutLeadInputSchema';
import { LeadHistoryUncheckedUpdateWithoutLeadInputSchema } from './LeadHistoryUncheckedUpdateWithoutLeadInputSchema';

export const LeadHistoryUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadHistoryUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadHistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadHistoryUpdateWithoutLeadInputSchema),z.lazy(() => LeadHistoryUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default LeadHistoryUpdateWithWhereUniqueWithoutLeadInputSchema;
