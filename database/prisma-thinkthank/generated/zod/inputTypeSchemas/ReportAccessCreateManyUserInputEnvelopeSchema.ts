import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportAccessCreateManyUserInputSchema } from './ReportAccessCreateManyUserInputSchema';

export const ReportAccessCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ReportAccessCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReportAccessCreateManyUserInputSchema),z.lazy(() => ReportAccessCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReportAccessCreateManyUserInputEnvelopeSchema;
