import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkTagWhereInputSchema } from '../inputTypeSchemas/LinkTagWhereInputSchema'

export const LinkTagDeleteManyArgsSchema: z.ZodType<Prisma.LinkTagDeleteManyArgs> = z
    .object({
        where: LinkTagWhereInputSchema.optional()
    })
    .strict()

export default LinkTagDeleteManyArgsSchema
