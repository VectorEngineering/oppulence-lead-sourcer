import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineCreateManyProjectInputSchema } from './PipelineCreateManyProjectInputSchema';

export const PipelineCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PipelineCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PipelineCreateManyProjectInputSchema),z.lazy(() => PipelineCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PipelineCreateManyProjectInputEnvelopeSchema;
