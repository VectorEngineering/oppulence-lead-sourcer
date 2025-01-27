import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DefaultDomainsSelectSchema } from '../inputTypeSchemas/DefaultDomainsSelectSchema'
import { DefaultDomainsIncludeSchema } from '../inputTypeSchemas/DefaultDomainsIncludeSchema'

export const DefaultDomainsArgsSchema: z.ZodType<Prisma.DefaultDomainsDefaultArgs> = z
    .object({
        select: z.lazy(() => DefaultDomainsSelectSchema).optional(),
        include: z.lazy(() => DefaultDomainsIncludeSchema).optional()
    })
    .strict()

export default DefaultDomainsArgsSchema
