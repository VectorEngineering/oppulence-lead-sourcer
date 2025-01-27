import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainWhereInputSchema } from './RegisteredDomainWhereInputSchema'

export const RegisteredDomainListRelationFilterSchema: z.ZodType<Prisma.RegisteredDomainListRelationFilter> = z
    .object({
        every: z.lazy(() => RegisteredDomainWhereInputSchema).optional(),
        some: z.lazy(() => RegisteredDomainWhereInputSchema).optional(),
        none: z.lazy(() => RegisteredDomainWhereInputSchema).optional()
    })
    .strict()

export default RegisteredDomainListRelationFilterSchema
