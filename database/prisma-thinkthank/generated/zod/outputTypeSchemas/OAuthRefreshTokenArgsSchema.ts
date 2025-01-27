import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthRefreshTokenSelectSchema } from '../inputTypeSchemas/OAuthRefreshTokenSelectSchema'
import { OAuthRefreshTokenIncludeSchema } from '../inputTypeSchemas/OAuthRefreshTokenIncludeSchema'

export const OAuthRefreshTokenArgsSchema: z.ZodType<Prisma.OAuthRefreshTokenDefaultArgs> = z
    .object({
        select: z.lazy(() => OAuthRefreshTokenSelectSchema).optional(),
        include: z.lazy(() => OAuthRefreshTokenIncludeSchema).optional()
    })
    .strict()

export default OAuthRefreshTokenArgsSchema
