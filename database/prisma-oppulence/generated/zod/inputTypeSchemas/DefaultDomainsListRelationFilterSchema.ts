import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DefaultDomainsWhereInputSchema } from './DefaultDomainsWhereInputSchema'

export const DefaultDomainsListRelationFilterSchema: z.ZodType<Prisma.DefaultDomainsListRelationFilter> = z
    .object({
        every: z.lazy(() => DefaultDomainsWhereInputSchema).optional(),
        some: z.lazy(() => DefaultDomainsWhereInputSchema).optional(),
        none: z.lazy(() => DefaultDomainsWhereInputSchema).optional()
    })
    .strict()

export default DefaultDomainsListRelationFilterSchema
