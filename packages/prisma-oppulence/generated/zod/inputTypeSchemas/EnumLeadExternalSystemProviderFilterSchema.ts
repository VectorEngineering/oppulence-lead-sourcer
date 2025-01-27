import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema'
import { NestedEnumLeadExternalSystemProviderFilterSchema } from './NestedEnumLeadExternalSystemProviderFilterSchema'

export const EnumLeadExternalSystemProviderFilterSchema: z.ZodType<Prisma.EnumLeadExternalSystemProviderFilter> = z
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
            .union([z.lazy(() => LeadExternalSystemProviderSchema), z.lazy(() => NestedEnumLeadExternalSystemProviderFilterSchema)])
            .optional()
    })
    .strict()

export default EnumLeadExternalSystemProviderFilterSchema
