import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthAppUpdateManyMutationInputSchema } from '../inputTypeSchemas/OAuthAppUpdateManyMutationInputSchema'
import { OAuthAppUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OAuthAppUncheckedUpdateManyInputSchema'
import { OAuthAppWhereInputSchema } from '../inputTypeSchemas/OAuthAppWhereInputSchema'

export const OAuthAppUpdateManyArgsSchema: z.ZodType<Prisma.OAuthAppUpdateManyArgs> = z
    .object({
        data: z.union([OAuthAppUpdateManyMutationInputSchema, OAuthAppUncheckedUpdateManyInputSchema]),
        where: OAuthAppWhereInputSchema.optional()
    })
    .strict()

export default OAuthAppUpdateManyArgsSchema
