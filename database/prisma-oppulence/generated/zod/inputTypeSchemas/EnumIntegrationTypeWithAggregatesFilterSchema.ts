import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationTypeSchema } from './IntegrationTypeSchema'
import { NestedEnumIntegrationTypeWithAggregatesFilterSchema } from './NestedEnumIntegrationTypeWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumIntegrationTypeFilterSchema } from './NestedEnumIntegrationTypeFilterSchema'

export const EnumIntegrationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumIntegrationTypeWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => IntegrationTypeSchema).optional(),
        in: z
            .lazy(() => IntegrationTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => IntegrationTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => IntegrationTypeSchema), z.lazy(() => NestedEnumIntegrationTypeWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumIntegrationTypeFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumIntegrationTypeFilterSchema).optional()
    })
    .strict()

export default EnumIntegrationTypeWithAggregatesFilterSchema
