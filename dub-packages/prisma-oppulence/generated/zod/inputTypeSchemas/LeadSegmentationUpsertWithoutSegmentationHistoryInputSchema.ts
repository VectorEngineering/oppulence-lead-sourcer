import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationUpdateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUpdateWithoutSegmentationHistoryInputSchema';
import { LeadSegmentationUncheckedUpdateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUncheckedUpdateWithoutSegmentationHistoryInputSchema';
import { LeadSegmentationCreateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationCreateWithoutSegmentationHistoryInputSchema';
import { LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema';
import { LeadSegmentationWhereInputSchema } from './LeadSegmentationWhereInputSchema';

export const LeadSegmentationUpsertWithoutSegmentationHistoryInputSchema: z.ZodType<Prisma.LeadSegmentationUpsertWithoutSegmentationHistoryInput> = z.object({
  update: z.union([ z.lazy(() => LeadSegmentationUpdateWithoutSegmentationHistoryInputSchema),z.lazy(() => LeadSegmentationUncheckedUpdateWithoutSegmentationHistoryInputSchema) ]),
  create: z.union([ z.lazy(() => LeadSegmentationCreateWithoutSegmentationHistoryInputSchema),z.lazy(() => LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema) ]),
  where: z.lazy(() => LeadSegmentationWhereInputSchema).optional()
}).strict();

export default LeadSegmentationUpsertWithoutSegmentationHistoryInputSchema;
