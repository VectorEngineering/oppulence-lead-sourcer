import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RestrictedTokenSelectSchema } from '../inputTypeSchemas/RestrictedTokenSelectSchema'
import { RestrictedTokenIncludeSchema } from '../inputTypeSchemas/RestrictedTokenIncludeSchema'

export const RestrictedTokenArgsSchema: z.ZodType<Prisma.RestrictedTokenDefaultArgs> = z
    .object({
        select: z.lazy(() => RestrictedTokenSelectSchema).optional(),
        include: z.lazy(() => RestrictedTokenIncludeSchema).optional()
    })
    .strict()

export default RestrictedTokenArgsSchema
