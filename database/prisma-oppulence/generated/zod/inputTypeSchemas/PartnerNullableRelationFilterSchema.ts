import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'

export const PartnerNullableRelationFilterSchema: z.ZodType<Prisma.PartnerNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => PartnerWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => PartnerWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default PartnerNullableRelationFilterSchema
