import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerStatusSchema } from './PartnerStatusSchema'
import { NestedEnumPartnerStatusFilterSchema } from './NestedEnumPartnerStatusFilterSchema'

export const EnumPartnerStatusFilterSchema: z.ZodType<Prisma.EnumPartnerStatusFilter> = z
    .object({
        equals: z.lazy(() => PartnerStatusSchema).optional(),
        in: z
            .lazy(() => PartnerStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => PartnerStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => PartnerStatusSchema), z.lazy(() => NestedEnumPartnerStatusFilterSchema)]).optional()
    })
    .strict()

export default EnumPartnerStatusFilterSchema
