import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'

export const StageDurationUncheckedUpdateManyWithoutPipelineInputSchema: z.ZodType<Prisma.StageDurationUncheckedUpdateManyWithoutPipelineInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            stageId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            expectedDays: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
            warningDays: z
                .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            criticalDays: z
                .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable()
        })
        .strict()

export default StageDurationUncheckedUpdateManyWithoutPipelineInputSchema
