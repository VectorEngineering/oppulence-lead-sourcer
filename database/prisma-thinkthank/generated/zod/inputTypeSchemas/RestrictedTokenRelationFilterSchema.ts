import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenWhereInputSchema } from './RestrictedTokenWhereInputSchema'

export const RestrictedTokenRelationFilterSchema: z.ZodType<Prisma.RestrictedTokenRelationFilter> = z
    .object({
        is: z.lazy(() => RestrictedTokenWhereInputSchema).optional(),
        isNot: z.lazy(() => RestrictedTokenWhereInputSchema).optional()
    })
    .strict()

export default RestrictedTokenRelationFilterSchema
