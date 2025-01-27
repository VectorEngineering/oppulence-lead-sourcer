import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'

export const LinkRelationFilterSchema: z.ZodType<Prisma.LinkRelationFilter> = z
    .object({
        is: z.lazy(() => LinkWhereInputSchema).optional(),
        isNot: z.lazy(() => LinkWhereInputSchema).optional()
    })
    .strict()

export default LinkRelationFilterSchema
