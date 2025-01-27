import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreHistoryWhereUniqueInputSchema } from './LeadScoreHistoryWhereUniqueInputSchema';
import { LeadScoreHistoryUpdateWithoutLeadScoreInputSchema } from './LeadScoreHistoryUpdateWithoutLeadScoreInputSchema';
import { LeadScoreHistoryUncheckedUpdateWithoutLeadScoreInputSchema } from './LeadScoreHistoryUncheckedUpdateWithoutLeadScoreInputSchema';

export const LeadScoreHistoryUpdateWithWhereUniqueWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadScoreHistoryUpdateWithWhereUniqueWithoutLeadScoreInput> = z.object({
  where: z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadScoreHistoryUpdateWithoutLeadScoreInputSchema),z.lazy(() => LeadScoreHistoryUncheckedUpdateWithoutLeadScoreInputSchema) ]),
}).strict();

export default LeadScoreHistoryUpdateWithWhereUniqueWithoutLeadScoreInputSchema;
