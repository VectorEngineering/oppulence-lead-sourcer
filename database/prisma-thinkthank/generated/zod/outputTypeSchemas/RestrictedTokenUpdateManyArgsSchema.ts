import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RestrictedTokenUpdateManyMutationInputSchema } from '../inputTypeSchemas/RestrictedTokenUpdateManyMutationInputSchema'
import { RestrictedTokenUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RestrictedTokenUncheckedUpdateManyInputSchema'
import { RestrictedTokenWhereInputSchema } from '../inputTypeSchemas/RestrictedTokenWhereInputSchema'

export const RestrictedTokenUpdateManyArgsSchema: z.ZodType<Prisma.RestrictedTokenUpdateManyArgs> = z
    .object({
        data: z.union([RestrictedTokenUpdateManyMutationInputSchema, RestrictedTokenUncheckedUpdateManyInputSchema]),
        where: RestrictedTokenWhereInputSchema.optional()
    })
    .strict()

export default RestrictedTokenUpdateManyArgsSchema
