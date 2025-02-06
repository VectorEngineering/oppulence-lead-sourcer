import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardCreateManyProjectInputSchema } from './DashboardCreateManyProjectInputSchema';

export const DashboardCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.DashboardCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DashboardCreateManyProjectInputSchema),z.lazy(() => DashboardCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DashboardCreateManyProjectInputEnvelopeSchema;
