import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthAppCreateManyInputSchema } from '../inputTypeSchemas/OAuthAppCreateManyInputSchema'

export const OAuthAppCreateManyArgsSchema: z.ZodType<Prisma.OAuthAppCreateManyArgs> = z
    .object({
        data: z.union([OAuthAppCreateManyInputSchema, OAuthAppCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default OAuthAppCreateManyArgsSchema
