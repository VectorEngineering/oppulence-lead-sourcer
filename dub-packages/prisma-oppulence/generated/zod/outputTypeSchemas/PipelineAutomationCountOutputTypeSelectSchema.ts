import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PipelineAutomationCountOutputTypeSelectSchema: z.ZodType<Prisma.PipelineAutomationCountOutputTypeSelect> = z.object({
  triggers: z.boolean().optional(),
  actions: z.boolean().optional(),
  conditions: z.boolean().optional(),
}).strict();

export default PipelineAutomationCountOutputTypeSelectSchema;
