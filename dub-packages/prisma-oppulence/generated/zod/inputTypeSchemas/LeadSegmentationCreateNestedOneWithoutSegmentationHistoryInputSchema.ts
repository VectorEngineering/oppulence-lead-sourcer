import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationCreateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationCreateWithoutSegmentationHistoryInputSchema';
import { LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema';
import { LeadSegmentationCreateOrConnectWithoutSegmentationHistoryInputSchema } from './LeadSegmentationCreateOrConnectWithoutSegmentationHistoryInputSchema';
import { LeadSegmentationWhereUniqueInputSchema } from './LeadSegmentationWhereUniqueInputSchema';

export const LeadSegmentationCreateNestedOneWithoutSegmentationHistoryInputSchema: z.ZodType<Prisma.LeadSegmentationCreateNestedOneWithoutSegmentationHistoryInput> = z.object({
  create: z.union([ z.lazy(() => LeadSegmentationCreateWithoutSegmentationHistoryInputSchema),z.lazy(() => LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadSegmentationCreateOrConnectWithoutSegmentationHistoryInputSchema).optional(),
  connect: z.lazy(() => LeadSegmentationWhereUniqueInputSchema).optional()
}).strict();

export default LeadSegmentationCreateNestedOneWithoutSegmentationHistoryInputSchema;
