import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RestrictedTokenWhereInputSchema } from '../inputTypeSchemas/RestrictedTokenWhereInputSchema'

export const RestrictedTokenDeleteManyArgsSchema: z.ZodType<Prisma.RestrictedTokenDeleteManyArgs> = z
    .object({
        where: RestrictedTokenWhereInputSchema.optional()
    })
    .strict()

export default RestrictedTokenDeleteManyArgsSchema
