import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationScalarWhereInputSchema } from './LeadSegmentationScalarWhereInputSchema';
import { LeadSegmentationUpdateManyMutationInputSchema } from './LeadSegmentationUpdateManyMutationInputSchema';
import { LeadSegmentationUncheckedUpdateManyWithoutLeadInputSchema } from './LeadSegmentationUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadSegmentationUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadSegmentationUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadSegmentationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadSegmentationUpdateManyMutationInputSchema),z.lazy(() => LeadSegmentationUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadSegmentationUpdateManyWithWhereWithoutLeadInputSchema;
