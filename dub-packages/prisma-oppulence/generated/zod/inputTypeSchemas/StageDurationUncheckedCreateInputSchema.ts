import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StageDurationUncheckedCreateInputSchema: z.ZodType<Prisma.StageDurationUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  pipelineId: z.string(),
  stageId: z.string(),
  expectedDays: z.number().int(),
  warningDays: z.number().int().optional().nullable(),
  criticalDays: z.number().int().optional().nullable()
}).strict();

export default StageDurationUncheckedCreateInputSchema;
