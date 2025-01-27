import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutLeadSegmentationInputSchema } from './LeadUpdateWithoutLeadSegmentationInputSchema';
import { LeadUncheckedUpdateWithoutLeadSegmentationInputSchema } from './LeadUncheckedUpdateWithoutLeadSegmentationInputSchema';
import { LeadCreateWithoutLeadSegmentationInputSchema } from './LeadCreateWithoutLeadSegmentationInputSchema';
import { LeadUncheckedCreateWithoutLeadSegmentationInputSchema } from './LeadUncheckedCreateWithoutLeadSegmentationInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutLeadSegmentationInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLeadSegmentationInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutLeadSegmentationInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadSegmentationInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadSegmentationInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadSegmentationInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutLeadSegmentationInputSchema;
