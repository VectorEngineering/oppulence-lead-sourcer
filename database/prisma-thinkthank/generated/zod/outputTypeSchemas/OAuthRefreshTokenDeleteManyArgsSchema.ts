import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthRefreshTokenWhereInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenWhereInputSchema'

export const OAuthRefreshTokenDeleteManyArgsSchema: z.ZodType<Prisma.OAuthRefreshTokenDeleteManyArgs> = z
    .object({
        where: OAuthRefreshTokenWhereInputSchema.optional()
    })
    .strict()

export default OAuthRefreshTokenDeleteManyArgsSchema
