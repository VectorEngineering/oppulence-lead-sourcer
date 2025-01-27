import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineCreateNestedOneWithoutStagesInputSchema } from './PipelineCreateNestedOneWithoutStagesInputSchema';
import { DealCreateNestedManyWithoutStageInputSchema } from './DealCreateNestedManyWithoutStageInputSchema';
import { StageRequiredFieldCreateNestedManyWithoutStageInputSchema } from './StageRequiredFieldCreateNestedManyWithoutStageInputSchema';
import { StageDurationCreateNestedOneWithoutStageInputSchema } from './StageDurationCreateNestedOneWithoutStageInputSchema';

export const PipelineStageCreateInputSchema: z.ZodType<Prisma.PipelineStageCreateInput> = z.object({
  id: z.string().cuid().optional(),
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
  updatedAt: z.coerce.date().optional(),
  pipeline: z.lazy(() => PipelineCreateNestedOneWithoutStagesInputSchema),
  deals: z.lazy(() => DealCreateNestedManyWithoutStageInputSchema).optional(),
  requiredFields: z.lazy(() => StageRequiredFieldCreateNestedManyWithoutStageInputSchema).optional(),
  stageDuration: z.lazy(() => StageDurationCreateNestedOneWithoutStageInputSchema).optional()
}).strict();

export default PipelineStageCreateInputSchema;
