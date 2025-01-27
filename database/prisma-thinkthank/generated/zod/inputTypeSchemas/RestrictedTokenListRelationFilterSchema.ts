import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenWhereInputSchema } from './RestrictedTokenWhereInputSchema'

export const RestrictedTokenListRelationFilterSchema: z.ZodType<Prisma.RestrictedTokenListRelationFilter> = z
    .object({
        every: z.lazy(() => RestrictedTokenWhereInputSchema).optional(),
        some: z.lazy(() => RestrictedTokenWhereInputSchema).optional(),
        none: z.lazy(() => RestrictedTokenWhereInputSchema).optional()
    })
    .strict()

export default RestrictedTokenListRelationFilterSchema
