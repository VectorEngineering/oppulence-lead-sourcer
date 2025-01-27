import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PipelineStageCountOutputTypeSelectSchema: z.ZodType<Prisma.PipelineStageCountOutputTypeSelect> = z.object({
  deals: z.boolean().optional(),
  requiredFields: z.boolean().optional(),
}).strict();

export default PipelineStageCountOutputTypeSelectSchema;
