import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkCreateManyInputSchema } from '../inputTypeSchemas/LinkCreateManyInputSchema'

export const LinkCreateManyArgsSchema: z.ZodType<Prisma.LinkCreateManyArgs> = z
    .object({
        data: z.union([LinkCreateManyInputSchema, LinkCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LinkCreateManyArgsSchema
