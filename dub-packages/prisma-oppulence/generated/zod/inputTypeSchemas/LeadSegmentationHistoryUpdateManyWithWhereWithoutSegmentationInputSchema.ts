import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationHistoryScalarWhereInputSchema } from './LeadSegmentationHistoryScalarWhereInputSchema';
import { LeadSegmentationHistoryUpdateManyMutationInputSchema } from './LeadSegmentationHistoryUpdateManyMutationInputSchema';
import { LeadSegmentationHistoryUncheckedUpdateManyWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUncheckedUpdateManyWithoutSegmentationInputSchema';

export const LeadSegmentationHistoryUpdateManyWithWhereWithoutSegmentationInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryUpdateManyWithWhereWithoutSegmentationInput> = z.object({
  where: z.lazy(() => LeadSegmentationHistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadSegmentationHistoryUpdateManyMutationInputSchema),z.lazy(() => LeadSegmentationHistoryUncheckedUpdateManyWithoutSegmentationInputSchema) ]),
}).strict();

export default LeadSegmentationHistoryUpdateManyWithWhereWithoutSegmentationInputSchema;
