import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveHistoryWhereUniqueInputSchema } from './LeadCompetitiveHistoryWhereUniqueInputSchema';
import { LeadCompetitiveHistoryUpdateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUpdateWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryUncheckedUpdateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUncheckedUpdateWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema';

export const LeadCompetitiveHistoryUpsertWithWhereUniqueWithoutAnalysisInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryUpsertWithWhereUniqueWithoutAnalysisInput> = z.object({
  where: z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadCompetitiveHistoryUpdateWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryUncheckedUpdateWithoutAnalysisInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema) ]),
}).strict();

export default LeadCompetitiveHistoryUpsertWithWhereUniqueWithoutAnalysisInputSchema;
