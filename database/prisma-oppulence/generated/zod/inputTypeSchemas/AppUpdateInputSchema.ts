import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { UserUpdateOneRequiredWithoutAppsNestedInputSchema } from './UserUpdateOneRequiredWithoutAppsNestedInputSchema'
import { ProjectUpdateOneRequiredWithoutAppsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutAppsNestedInputSchema'

export const AppUpdateInputSchema: z.ZodType<Prisma.AppUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        appId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        config: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        createdBy: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        settings: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        user: z.lazy(() => UserUpdateOneRequiredWithoutAppsNestedInputSchema).optional(),
        project: z.lazy(() => ProjectUpdateOneRequiredWithoutAppsNestedInputSchema).optional()
    })
    .strict()

export default AppUpdateInputSchema
