import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PipelineStagePipelineIdOrderCompoundUniqueInputSchema: z.ZodType<Prisma.PipelineStagePipelineIdOrderCompoundUniqueInput> = z.object({
  pipelineId: z.string(),
  order: z.number()
}).strict();

export default PipelineStagePipelineIdOrderCompoundUniqueInputSchema;
