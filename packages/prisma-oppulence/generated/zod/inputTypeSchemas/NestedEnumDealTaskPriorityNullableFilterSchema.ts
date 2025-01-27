import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema'

export const NestedEnumDealTaskPriorityNullableFilterSchema: z.ZodType<Prisma.NestedEnumDealTaskPriorityNullableFilter> = z
    .object({
        equals: z
            .lazy(() => DealTaskPrioritySchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => DealTaskPrioritySchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => DealTaskPrioritySchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => DealTaskPrioritySchema), z.lazy(() => NestedEnumDealTaskPriorityNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default NestedEnumDealTaskPriorityNullableFilterSchema
