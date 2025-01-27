import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthAppWhereInputSchema } from '../inputTypeSchemas/OAuthAppWhereInputSchema'

export const OAuthAppDeleteManyArgsSchema: z.ZodType<Prisma.OAuthAppDeleteManyArgs> = z
    .object({
        where: OAuthAppWhereInputSchema.optional()
    })
    .strict()

export default OAuthAppDeleteManyArgsSchema
