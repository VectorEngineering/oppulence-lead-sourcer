import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutLeadSegmentationInputSchema } from './LeadCreateWithoutLeadSegmentationInputSchema';
import { LeadUncheckedCreateWithoutLeadSegmentationInputSchema } from './LeadUncheckedCreateWithoutLeadSegmentationInputSchema';

export const LeadCreateOrConnectWithoutLeadSegmentationInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLeadSegmentationInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadSegmentationInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadSegmentationInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutLeadSegmentationInputSchema;
