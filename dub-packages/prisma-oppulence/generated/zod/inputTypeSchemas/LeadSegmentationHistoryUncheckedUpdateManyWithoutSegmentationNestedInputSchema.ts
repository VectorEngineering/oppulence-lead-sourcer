import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationHistoryCreateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryCreateWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema } from './LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryUpsertWithWhereUniqueWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUpsertWithWhereUniqueWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryCreateManySegmentationInputEnvelopeSchema } from './LeadSegmentationHistoryCreateManySegmentationInputEnvelopeSchema';
import { LeadSegmentationHistoryWhereUniqueInputSchema } from './LeadSegmentationHistoryWhereUniqueInputSchema';
import { LeadSegmentationHistoryUpdateWithWhereUniqueWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUpdateWithWhereUniqueWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryUpdateManyWithWhereWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUpdateManyWithWhereWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryScalarWhereInputSchema } from './LeadSegmentationHistoryScalarWhereInputSchema';

export const LeadSegmentationHistoryUncheckedUpdateManyWithoutSegmentationNestedInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryUncheckedUpdateManyWithoutSegmentationNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadSegmentationHistoryCreateWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryCreateWithoutSegmentationInputSchema).array(),z.lazy(() => LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadSegmentationHistoryUpsertWithWhereUniqueWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryUpsertWithWhereUniqueWithoutSegmentationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadSegmentationHistoryCreateManySegmentationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema),z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema),z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema),z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema),z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadSegmentationHistoryUpdateWithWhereUniqueWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryUpdateWithWhereUniqueWithoutSegmentationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadSegmentationHistoryUpdateManyWithWhereWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryUpdateManyWithWhereWithoutSegmentationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadSegmentationHistoryScalarWhereInputSchema),z.lazy(() => LeadSegmentationHistoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadSegmentationHistoryUncheckedUpdateManyWithoutSegmentationNestedInputSchema;
