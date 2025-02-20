import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema'

export const OAuthAppNullableRelationFilterSchema: z.ZodType<Prisma.OAuthAppNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => OAuthAppWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => OAuthAppWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default OAuthAppNullableRelationFilterSchema
