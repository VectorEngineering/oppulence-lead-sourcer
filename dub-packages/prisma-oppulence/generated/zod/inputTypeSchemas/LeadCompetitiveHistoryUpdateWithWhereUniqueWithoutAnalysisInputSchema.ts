import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveHistoryWhereUniqueInputSchema } from './LeadCompetitiveHistoryWhereUniqueInputSchema';
import { LeadCompetitiveHistoryUpdateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUpdateWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryUncheckedUpdateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUncheckedUpdateWithoutAnalysisInputSchema';

export const LeadCompetitiveHistoryUpdateWithWhereUniqueWithoutAnalysisInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryUpdateWithWhereUniqueWithoutAnalysisInput> = z.object({
  where: z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadCompetitiveHistoryUpdateWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryUncheckedUpdateWithoutAnalysisInputSchema) ]),
}).strict();

export default LeadCompetitiveHistoryUpdateWithWhereUniqueWithoutAnalysisInputSchema;
