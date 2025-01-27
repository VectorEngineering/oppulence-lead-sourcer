import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DealUncheckedUpdateManyWithoutStageNestedInputSchema } from './DealUncheckedUpdateManyWithoutStageNestedInputSchema'
import { StageRequiredFieldUncheckedUpdateManyWithoutStageNestedInputSchema } from './StageRequiredFieldUncheckedUpdateManyWithoutStageNestedInputSchema'
import { StageDurationUncheckedUpdateOneWithoutStageNestedInputSchema } from './StageDurationUncheckedUpdateOneWithoutStageNestedInputSchema'

export const PipelineStageUncheckedUpdateInputSchema: z.ZodType<Prisma.PipelineStageUncheckedUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        pipelineId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        description: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        probability: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        color: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        icon: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        isFinal: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        isWon: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        isLost: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        autoMoveAfterDays: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        nextStageId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        deals: z.lazy(() => DealUncheckedUpdateManyWithoutStageNestedInputSchema).optional(),
        requiredFields: z.lazy(() => StageRequiredFieldUncheckedUpdateManyWithoutStageNestedInputSchema).optional(),
        stageDuration: z.lazy(() => StageDurationUncheckedUpdateOneWithoutStageNestedInputSchema).optional()
    })
    .strict()

export default PipelineStageUncheckedUpdateInputSchema
