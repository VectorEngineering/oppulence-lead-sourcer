import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationWhereUniqueInputSchema } from './LeadSegmentationWhereUniqueInputSchema';
import { LeadSegmentationCreateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationCreateWithoutSegmentationHistoryInputSchema';
import { LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema';

export const LeadSegmentationCreateOrConnectWithoutSegmentationHistoryInputSchema: z.ZodType<Prisma.LeadSegmentationCreateOrConnectWithoutSegmentationHistoryInput> = z.object({
  where: z.lazy(() => LeadSegmentationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadSegmentationCreateWithoutSegmentationHistoryInputSchema),z.lazy(() => LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema) ]),
}).strict();

export default LeadSegmentationCreateOrConnectWithoutSegmentationHistoryInputSchema;
