import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryUpsertWithWhereUniqueWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUpsertWithWhereUniqueWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryCreateManyAnalysisInputEnvelopeSchema } from './LeadCompetitiveHistoryCreateManyAnalysisInputEnvelopeSchema';
import { LeadCompetitiveHistoryWhereUniqueInputSchema } from './LeadCompetitiveHistoryWhereUniqueInputSchema';
import { LeadCompetitiveHistoryUpdateWithWhereUniqueWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUpdateWithWhereUniqueWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryUpdateManyWithWhereWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUpdateManyWithWhereWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryScalarWhereInputSchema } from './LeadCompetitiveHistoryScalarWhereInputSchema';

export const LeadCompetitiveHistoryUncheckedUpdateManyWithoutAnalysisNestedInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryUncheckedUpdateManyWithoutAnalysisNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema).array(),z.lazy(() => LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadCompetitiveHistoryUpsertWithWhereUniqueWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryUpsertWithWhereUniqueWithoutAnalysisInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadCompetitiveHistoryCreateManyAnalysisInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema),z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema),z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema),z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema),z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadCompetitiveHistoryUpdateWithWhereUniqueWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryUpdateWithWhereUniqueWithoutAnalysisInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadCompetitiveHistoryUpdateManyWithWhereWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryUpdateManyWithWhereWithoutAnalysisInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadCompetitiveHistoryScalarWhereInputSchema),z.lazy(() => LeadCompetitiveHistoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadCompetitiveHistoryUncheckedUpdateManyWithoutAnalysisNestedInputSchema;
