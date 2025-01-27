import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationWhereUniqueInputSchema } from './LeadSegmentationWhereUniqueInputSchema';
import { LeadSegmentationUpdateWithoutLeadInputSchema } from './LeadSegmentationUpdateWithoutLeadInputSchema';
import { LeadSegmentationUncheckedUpdateWithoutLeadInputSchema } from './LeadSegmentationUncheckedUpdateWithoutLeadInputSchema';
import { LeadSegmentationCreateWithoutLeadInputSchema } from './LeadSegmentationCreateWithoutLeadInputSchema';
import { LeadSegmentationUncheckedCreateWithoutLeadInputSchema } from './LeadSegmentationUncheckedCreateWithoutLeadInputSchema';

export const LeadSegmentationUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadSegmentationUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadSegmentationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadSegmentationUpdateWithoutLeadInputSchema),z.lazy(() => LeadSegmentationUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadSegmentationCreateWithoutLeadInputSchema),z.lazy(() => LeadSegmentationUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadSegmentationUpsertWithWhereUniqueWithoutLeadInputSchema;
