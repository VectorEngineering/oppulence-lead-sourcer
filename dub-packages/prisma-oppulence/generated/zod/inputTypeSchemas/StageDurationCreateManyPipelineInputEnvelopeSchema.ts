import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StageDurationCreateManyPipelineInputSchema } from './StageDurationCreateManyPipelineInputSchema';

export const StageDurationCreateManyPipelineInputEnvelopeSchema: z.ZodType<Prisma.StageDurationCreateManyPipelineInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StageDurationCreateManyPipelineInputSchema),z.lazy(() => StageDurationCreateManyPipelineInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default StageDurationCreateManyPipelineInputEnvelopeSchema;
