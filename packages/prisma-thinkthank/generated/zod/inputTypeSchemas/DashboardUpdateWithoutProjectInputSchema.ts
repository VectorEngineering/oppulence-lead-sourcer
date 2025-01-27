import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { LinkUpdateOneWithoutDashboardNestedInputSchema } from './LinkUpdateOneWithoutDashboardNestedInputSchema'
import { UserUpdateOneWithoutDashboardsNestedInputSchema } from './UserUpdateOneWithoutDashboardsNestedInputSchema'

export const DashboardUpdateWithoutProjectInputSchema: z.ZodType<Prisma.DashboardUpdateWithoutProjectInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        doIndex: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        password: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        showConversions: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        link: z.lazy(() => LinkUpdateOneWithoutDashboardNestedInputSchema).optional(),
        user: z.lazy(() => UserUpdateOneWithoutDashboardsNestedInputSchema).optional()
    })
    .strict()

export default DashboardUpdateWithoutProjectInputSchema
