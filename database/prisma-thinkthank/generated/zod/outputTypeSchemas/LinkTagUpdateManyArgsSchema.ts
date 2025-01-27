import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkTagUpdateManyMutationInputSchema } from '../inputTypeSchemas/LinkTagUpdateManyMutationInputSchema'
import { LinkTagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LinkTagUncheckedUpdateManyInputSchema'
import { LinkTagWhereInputSchema } from '../inputTypeSchemas/LinkTagWhereInputSchema'

export const LinkTagUpdateManyArgsSchema: z.ZodType<Prisma.LinkTagUpdateManyArgs> = z
    .object({
        data: z.union([LinkTagUpdateManyMutationInputSchema, LinkTagUncheckedUpdateManyInputSchema]),
        where: LinkTagWhereInputSchema.optional()
    })
    .strict()

export default LinkTagUpdateManyArgsSchema
