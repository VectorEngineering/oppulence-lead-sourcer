import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryCreateManyProjectInputSchema } from './LeadCategoryCreateManyProjectInputSchema';

export const LeadCategoryCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.LeadCategoryCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadCategoryCreateManyProjectInputSchema),z.lazy(() => LeadCategoryCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadCategoryCreateManyProjectInputEnvelopeSchema;
