import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const ContractTemplateUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ContractTemplateUncheckedUpdateWithoutProjectInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            description: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            category: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
            status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            language: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            industry: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            variables: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            sections: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            defaultValues: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            styling: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            layout: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            pageSettings: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            useCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
            lastUsedAt: z
                .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
            reviewRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
            approvalRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
            fileUrl: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            previewUrl: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            thumbnailUrl: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            accessLevel: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            permissions: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            validationRules: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            requiredFields: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            createdBy: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            updatedBy: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            archivedAt: z
                .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable()
        })
        .strict()

export default ContractTemplateUncheckedUpdateWithoutProjectInputSchema
