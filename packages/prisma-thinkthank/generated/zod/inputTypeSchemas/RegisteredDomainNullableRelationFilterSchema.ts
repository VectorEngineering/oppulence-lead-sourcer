import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainWhereInputSchema } from './RegisteredDomainWhereInputSchema'

export const RegisteredDomainNullableRelationFilterSchema: z.ZodType<Prisma.RegisteredDomainNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => RegisteredDomainWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => RegisteredDomainWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default RegisteredDomainNullableRelationFilterSchema
