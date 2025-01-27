import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PipelineStageUpdateOneRequiredWithoutRequiredFieldsNestedInputSchema } from './PipelineStageUpdateOneRequiredWithoutRequiredFieldsNestedInputSchema';

export const StageRequiredFieldUpdateInputSchema: z.ZodType<Prisma.StageRequiredFieldUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  errorMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stage: z.lazy(() => PipelineStageUpdateOneRequiredWithoutRequiredFieldsNestedInputSchema).optional()
}).strict();

export default StageRequiredFieldUpdateInputSchema;
