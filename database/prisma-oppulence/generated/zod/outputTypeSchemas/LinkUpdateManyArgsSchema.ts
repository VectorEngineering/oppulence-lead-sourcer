import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkUpdateManyMutationInputSchema } from '../inputTypeSchemas/LinkUpdateManyMutationInputSchema'
import { LinkUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LinkUncheckedUpdateManyInputSchema'
import { LinkWhereInputSchema } from '../inputTypeSchemas/LinkWhereInputSchema'

export const LinkUpdateManyArgsSchema: z.ZodType<Prisma.LinkUpdateManyArgs> = z
    .object({
        data: z.union([LinkUpdateManyMutationInputSchema, LinkUncheckedUpdateManyInputSchema]),
        where: LinkWhereInputSchema.optional()
    })
    .strict()

export default LinkUpdateManyArgsSchema
