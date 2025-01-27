import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PipelineStageCreateManyInputSchema: z.ZodType<Prisma.PipelineStageCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  pipelineId: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  order: z.number().int(),
  probability: z.number().optional().nullable(),
  color: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  isDefault: z.boolean().optional(),
  isFinal: z.boolean().optional(),
  isWon: z.boolean().optional(),
  isLost: z.boolean().optional(),
  autoMoveAfterDays: z.number().int().optional().nullable(),
  nextStageId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PipelineStageCreateManyInputSchema;
