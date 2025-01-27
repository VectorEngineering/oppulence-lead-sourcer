import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationHistoryCreateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryCreateWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema } from './LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryCreateManySegmentationInputEnvelopeSchema } from './LeadSegmentationHistoryCreateManySegmentationInputEnvelopeSchema';
import { LeadSegmentationHistoryWhereUniqueInputSchema } from './LeadSegmentationHistoryWhereUniqueInputSchema';

export const LeadSegmentationHistoryUncheckedCreateNestedManyWithoutSegmentationInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryUncheckedCreateNestedManyWithoutSegmentationInput> = z.object({
  create: z.union([ z.lazy(() => LeadSegmentationHistoryCreateWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryCreateWithoutSegmentationInputSchema).array(),z.lazy(() => LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadSegmentationHistoryCreateManySegmentationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema),z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadSegmentationHistoryUncheckedCreateNestedManyWithoutSegmentationInputSchema;
