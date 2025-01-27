import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema'

export const IntegrationNullableRelationFilterSchema: z.ZodType<Prisma.IntegrationNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => IntegrationWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => IntegrationWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default IntegrationNullableRelationFilterSchema
