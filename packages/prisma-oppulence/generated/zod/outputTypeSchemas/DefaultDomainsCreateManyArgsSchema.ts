import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DefaultDomainsCreateManyInputSchema } from '../inputTypeSchemas/DefaultDomainsCreateManyInputSchema'

export const DefaultDomainsCreateManyArgsSchema: z.ZodType<Prisma.DefaultDomainsCreateManyArgs> = z
    .object({
        data: z.union([DefaultDomainsCreateManyInputSchema, DefaultDomainsCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DefaultDomainsCreateManyArgsSchema
