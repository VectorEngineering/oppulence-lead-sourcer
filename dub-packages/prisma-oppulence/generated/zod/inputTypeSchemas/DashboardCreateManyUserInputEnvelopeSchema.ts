import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardCreateManyUserInputSchema } from './DashboardCreateManyUserInputSchema';

export const DashboardCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.DashboardCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DashboardCreateManyUserInputSchema),z.lazy(() => DashboardCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DashboardCreateManyUserInputEnvelopeSchema;
