import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageCreateManyPipelineInputSchema } from './PipelineStageCreateManyPipelineInputSchema';

export const PipelineStageCreateManyPipelineInputEnvelopeSchema: z.ZodType<Prisma.PipelineStageCreateManyPipelineInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PipelineStageCreateManyPipelineInputSchema),z.lazy(() => PipelineStageCreateManyPipelineInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PipelineStageCreateManyPipelineInputEnvelopeSchema;
