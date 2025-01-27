import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CustomerTagSelectSchema } from '../inputTypeSchemas/CustomerTagSelectSchema'
import { CustomerTagIncludeSchema } from '../inputTypeSchemas/CustomerTagIncludeSchema'

export const CustomerTagArgsSchema: z.ZodType<Prisma.CustomerTagDefaultArgs> = z
    .object({
        select: z.lazy(() => CustomerTagSelectSchema).optional(),
        include: z.lazy(() => CustomerTagIncludeSchema).optional()
    })
    .strict()

export default CustomerTagArgsSchema
