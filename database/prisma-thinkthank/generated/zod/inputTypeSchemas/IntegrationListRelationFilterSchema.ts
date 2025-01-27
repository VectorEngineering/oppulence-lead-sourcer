import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema'

export const IntegrationListRelationFilterSchema: z.ZodType<Prisma.IntegrationListRelationFilter> = z
    .object({
        every: z.lazy(() => IntegrationWhereInputSchema).optional(),
        some: z.lazy(() => IntegrationWhereInputSchema).optional(),
        none: z.lazy(() => IntegrationWhereInputSchema).optional()
    })
    .strict()

export default IntegrationListRelationFilterSchema
