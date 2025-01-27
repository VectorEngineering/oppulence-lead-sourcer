import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { AccessLevelSchema } from './AccessLevelSchema'
import { EnumAccessLevelFieldUpdateOperationsInputSchema } from './EnumAccessLevelFieldUpdateOperationsInputSchema'
import { AccessRuleConditionUncheckedUpdateManyWithoutRuleNestedInputSchema } from './AccessRuleConditionUncheckedUpdateManyWithoutRuleNestedInputSchema'

export const PipelineAccessRuleUncheckedUpdateWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAccessRuleUncheckedUpdateWithoutPipelineInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            roleId: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            userId: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            teamId: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            accessLevel: z
                .union([z.lazy(() => AccessLevelSchema), z.lazy(() => EnumAccessLevelFieldUpdateOperationsInputSchema)])
                .optional(),
            conditions: z.lazy(() => AccessRuleConditionUncheckedUpdateManyWithoutRuleNestedInputSchema).optional()
        })
        .strict()

export default PipelineAccessRuleUncheckedUpdateWithoutPipelineInputSchema
