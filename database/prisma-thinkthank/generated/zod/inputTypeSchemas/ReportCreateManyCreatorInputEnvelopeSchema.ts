import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateManyCreatorInputSchema } from './ReportCreateManyCreatorInputSchema';

export const ReportCreateManyCreatorInputEnvelopeSchema: z.ZodType<Prisma.ReportCreateManyCreatorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReportCreateManyCreatorInputSchema),z.lazy(() => ReportCreateManyCreatorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReportCreateManyCreatorInputEnvelopeSchema;
