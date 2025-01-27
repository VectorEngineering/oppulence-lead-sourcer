import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { KpiTypeSchema } from './KpiTypeSchema'
import { NestedEnumKpiTypeFilterSchema } from './NestedEnumKpiTypeFilterSchema'

export const EnumKpiTypeFilterSchema: z.ZodType<Prisma.EnumKpiTypeFilter> = z
    .object({
        equals: z.lazy(() => KpiTypeSchema).optional(),
        in: z
            .lazy(() => KpiTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => KpiTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => KpiTypeSchema), z.lazy(() => NestedEnumKpiTypeFilterSchema)]).optional()
    })
    .strict()

export default EnumKpiTypeFilterSchema
