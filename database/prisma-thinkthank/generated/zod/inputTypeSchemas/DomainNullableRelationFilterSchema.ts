import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainWhereInputSchema } from './DomainWhereInputSchema'

export const DomainNullableRelationFilterSchema: z.ZodType<Prisma.DomainNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => DomainWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => DomainWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default DomainNullableRelationFilterSchema
