import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { PipelineUpdateOneRequiredWithoutStageDurationsNestedInputSchema } from './PipelineUpdateOneRequiredWithoutStageDurationsNestedInputSchema';

export const StageDurationUpdateWithoutStageInputSchema: z.ZodType<Prisma.StageDurationUpdateWithoutStageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expectedDays: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  warningDays: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  criticalDays: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pipeline: z.lazy(() => PipelineUpdateOneRequiredWithoutStageDurationsNestedInputSchema).optional()
}).strict();

export default StageDurationUpdateWithoutStageInputSchema;
