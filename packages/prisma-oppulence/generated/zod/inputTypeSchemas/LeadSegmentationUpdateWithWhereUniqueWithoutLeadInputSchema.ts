import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationWhereUniqueInputSchema } from './LeadSegmentationWhereUniqueInputSchema';
import { LeadSegmentationUpdateWithoutLeadInputSchema } from './LeadSegmentationUpdateWithoutLeadInputSchema';
import { LeadSegmentationUncheckedUpdateWithoutLeadInputSchema } from './LeadSegmentationUncheckedUpdateWithoutLeadInputSchema';

export const LeadSegmentationUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadSegmentationUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadSegmentationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadSegmentationUpdateWithoutLeadInputSchema),z.lazy(() => LeadSegmentationUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default LeadSegmentationUpdateWithWhereUniqueWithoutLeadInputSchema;
