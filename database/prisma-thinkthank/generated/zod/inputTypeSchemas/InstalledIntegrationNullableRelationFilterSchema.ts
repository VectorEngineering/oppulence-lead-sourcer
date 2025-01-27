import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema'

export const InstalledIntegrationNullableRelationFilterSchema: z.ZodType<Prisma.InstalledIntegrationNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => InstalledIntegrationWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => InstalledIntegrationWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default InstalledIntegrationNullableRelationFilterSchema
