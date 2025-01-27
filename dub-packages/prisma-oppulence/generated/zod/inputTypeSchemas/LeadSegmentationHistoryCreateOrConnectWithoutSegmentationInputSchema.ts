import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationHistoryWhereUniqueInputSchema } from './LeadSegmentationHistoryWhereUniqueInputSchema';
import { LeadSegmentationHistoryCreateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryCreateWithoutSegmentationInputSchema';
import { LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema';

export const LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInput> = z.object({
  where: z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadSegmentationHistoryCreateWithoutSegmentationInputSchema),z.lazy(() => LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema) ]),
}).strict();

export default LeadSegmentationHistoryCreateOrConnectWithoutSegmentationInputSchema;
