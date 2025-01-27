import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { UserUpdateOneWithoutIntegrationsNestedInputSchema } from './UserUpdateOneWithoutIntegrationsNestedInputSchema'
import { OAuthAppUpdateOneWithoutIntegrationNestedInputSchema } from './OAuthAppUpdateOneWithoutIntegrationNestedInputSchema'
import { InstalledIntegrationUpdateManyWithoutIntegrationNestedInputSchema } from './InstalledIntegrationUpdateManyWithoutIntegrationNestedInputSchema'

export const IntegrationUpdateWithoutProjectInputSchema: z.ZodType<Prisma.IntegrationUpdateWithoutProjectInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        description: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        readme: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        developer: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        website: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        logo: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        screenshots: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        installUrl: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        user: z.lazy(() => UserUpdateOneWithoutIntegrationsNestedInputSchema).optional(),
        oAuthApp: z.lazy(() => OAuthAppUpdateOneWithoutIntegrationNestedInputSchema).optional(),
        installations: z.lazy(() => InstalledIntegrationUpdateManyWithoutIntegrationNestedInputSchema).optional()
    })
    .strict()

export default IntegrationUpdateWithoutProjectInputSchema
