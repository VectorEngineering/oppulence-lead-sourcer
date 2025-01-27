import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'

export const LinkListRelationFilterSchema: z.ZodType<Prisma.LinkListRelationFilter> = z
    .object({
        every: z.lazy(() => LinkWhereInputSchema).optional(),
        some: z.lazy(() => LinkWhereInputSchema).optional(),
        none: z.lazy(() => LinkWhereInputSchema).optional()
    })
    .strict()

export default LinkListRelationFilterSchema
