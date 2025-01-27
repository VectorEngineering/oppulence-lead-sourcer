import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthCodeUpdateManyMutationInputSchema } from '../inputTypeSchemas/OAuthCodeUpdateManyMutationInputSchema'
import { OAuthCodeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OAuthCodeUncheckedUpdateManyInputSchema'
import { OAuthCodeWhereInputSchema } from '../inputTypeSchemas/OAuthCodeWhereInputSchema'

export const OAuthCodeUpdateManyArgsSchema: z.ZodType<Prisma.OAuthCodeUpdateManyArgs> = z
    .object({
        data: z.union([OAuthCodeUpdateManyMutationInputSchema, OAuthCodeUncheckedUpdateManyInputSchema]),
        where: OAuthCodeWhereInputSchema.optional()
    })
    .strict()

export default OAuthCodeUpdateManyArgsSchema
