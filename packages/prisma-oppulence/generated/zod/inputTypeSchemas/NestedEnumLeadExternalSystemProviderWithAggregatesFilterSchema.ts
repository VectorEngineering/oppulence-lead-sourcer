import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumLeadExternalSystemProviderFilterSchema } from './NestedEnumLeadExternalSystemProviderFilterSchema'

export const NestedEnumLeadExternalSystemProviderWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLeadExternalSystemProviderWithAggregatesFilter> =
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

export default NestedEnumLeadExternalSystemProviderWithAggregatesFilterSchema
