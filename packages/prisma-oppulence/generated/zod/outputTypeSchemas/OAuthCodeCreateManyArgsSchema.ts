import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthCodeCreateManyInputSchema } from '../inputTypeSchemas/OAuthCodeCreateManyInputSchema'

export const OAuthCodeCreateManyArgsSchema: z.ZodType<Prisma.OAuthCodeCreateManyArgs> = z
    .object({
        data: z.union([OAuthCodeCreateManyInputSchema, OAuthCodeCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default OAuthCodeCreateManyArgsSchema
