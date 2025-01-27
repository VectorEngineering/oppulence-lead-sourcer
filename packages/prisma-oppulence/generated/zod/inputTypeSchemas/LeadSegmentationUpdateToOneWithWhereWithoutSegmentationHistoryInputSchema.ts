import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationWhereInputSchema } from './LeadSegmentationWhereInputSchema';
import { LeadSegmentationUpdateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUpdateWithoutSegmentationHistoryInputSchema';
import { LeadSegmentationUncheckedUpdateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUncheckedUpdateWithoutSegmentationHistoryInputSchema';

export const LeadSegmentationUpdateToOneWithWhereWithoutSegmentationHistoryInputSchema: z.ZodType<Prisma.LeadSegmentationUpdateToOneWithWhereWithoutSegmentationHistoryInput> = z.object({
  where: z.lazy(() => LeadSegmentationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadSegmentationUpdateWithoutSegmentationHistoryInputSchema),z.lazy(() => LeadSegmentationUncheckedUpdateWithoutSegmentationHistoryInputSchema) ]),
}).strict();

export default LeadSegmentationUpdateToOneWithWhereWithoutSegmentationHistoryInputSchema;
