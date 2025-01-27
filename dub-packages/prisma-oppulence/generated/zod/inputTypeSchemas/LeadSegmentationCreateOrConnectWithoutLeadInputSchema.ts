import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationWhereUniqueInputSchema } from './LeadSegmentationWhereUniqueInputSchema';
import { LeadSegmentationCreateWithoutLeadInputSchema } from './LeadSegmentationCreateWithoutLeadInputSchema';
import { LeadSegmentationUncheckedCreateWithoutLeadInputSchema } from './LeadSegmentationUncheckedCreateWithoutLeadInputSchema';

export const LeadSegmentationCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadSegmentationCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadSegmentationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadSegmentationCreateWithoutLeadInputSchema),z.lazy(() => LeadSegmentationUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadSegmentationCreateOrConnectWithoutLeadInputSchema;
