import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema'
import { NestedEnumLeadExternalSystemProviderWithAggregatesFilterSchema } from './NestedEnumLeadExternalSystemProviderWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumLeadExternalSystemProviderFilterSchema } from './NestedEnumLeadExternalSystemProviderFilterSchema'

export const EnumLeadExternalSystemProviderWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLeadExternalSystemProviderWithAggregatesFilter> =
    z
        .object({
            equals: z.lazy(() => LeadExternalSystemProviderSchema).optional(),
            in: z
                .lazy(() => LeadExternalSystemProviderSchema)
                .array()
                .optional(),
            notIn: z
                .lazy(() => LeadExternalSystemProviderSchema)
                .array()
                .optional(),
            not: z
                .union([
                    z.lazy(() => LeadExternalSystemProviderSchema),
                    z.lazy(() => NestedEnumLeadExternalSystemProviderWithAggregatesFilterSchema)
                ])
                .optional(),
            _count: z.lazy(() => NestedIntFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumLeadExternalSystemProviderFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumLeadExternalSystemProviderFilterSchema).optional()
        })
        .strict()

export default EnumLeadExternalSystemProviderWithAggregatesFilterSchema
