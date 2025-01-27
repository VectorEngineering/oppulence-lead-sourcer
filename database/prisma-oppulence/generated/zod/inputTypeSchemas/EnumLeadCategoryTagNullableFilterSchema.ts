import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCategoryTagSchema } from './LeadCategoryTagSchema'
import { NestedEnumLeadCategoryTagNullableFilterSchema } from './NestedEnumLeadCategoryTagNullableFilterSchema'

export const EnumLeadCategoryTagNullableFilterSchema: z.ZodType<Prisma.EnumLeadCategoryTagNullableFilter> = z
    .object({
        equals: z
            .lazy(() => LeadCategoryTagSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => LeadCategoryTagSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => LeadCategoryTagSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => LeadCategoryTagSchema), z.lazy(() => NestedEnumLeadCategoryTagNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default EnumLeadCategoryTagNullableFilterSchema
