import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema'

export const InstalledIntegrationListRelationFilterSchema: z.ZodType<Prisma.InstalledIntegrationListRelationFilter> = z
    .object({
        every: z.lazy(() => InstalledIntegrationWhereInputSchema).optional(),
        some: z.lazy(() => InstalledIntegrationWhereInputSchema).optional(),
        none: z.lazy(() => InstalledIntegrationWhereInputSchema).optional()
    })
    .strict()

export default InstalledIntegrationListRelationFilterSchema
