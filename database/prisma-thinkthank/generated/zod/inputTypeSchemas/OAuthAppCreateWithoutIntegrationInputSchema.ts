import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { OAuthCodeCreateNestedManyWithoutOAuthAppInputSchema } from './OAuthCodeCreateNestedManyWithoutOAuthAppInputSchema'

export const OAuthAppCreateWithoutIntegrationInputSchema: z.ZodType<Prisma.OAuthAppCreateWithoutIntegrationInput> = z
    .object({
        id: z.string().cuid().optional(),
        clientId: z.string(),
        hashedClientSecret: z.string(),
        partialClientSecret: z.string(),
        redirectUris: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        pkce: z.boolean().optional(),
        oAuthCodes: z.lazy(() => OAuthCodeCreateNestedManyWithoutOAuthAppInputSchema).optional()
    })
    .strict()

export default OAuthAppCreateWithoutIntegrationInputSchema
