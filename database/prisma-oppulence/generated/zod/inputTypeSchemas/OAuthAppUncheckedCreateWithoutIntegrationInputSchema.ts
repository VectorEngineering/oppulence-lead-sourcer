import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { OAuthCodeUncheckedCreateNestedManyWithoutOAuthAppInputSchema } from './OAuthCodeUncheckedCreateNestedManyWithoutOAuthAppInputSchema'

export const OAuthAppUncheckedCreateWithoutIntegrationInputSchema: z.ZodType<Prisma.OAuthAppUncheckedCreateWithoutIntegrationInput> = z
    .object({
        id: z.string().cuid().optional(),
        clientId: z.string(),
        hashedClientSecret: z.string(),
        partialClientSecret: z.string(),
        redirectUris: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        pkce: z.boolean().optional(),
        oAuthCodes: z.lazy(() => OAuthCodeUncheckedCreateNestedManyWithoutOAuthAppInputSchema).optional()
    })
    .strict()

export default OAuthAppUncheckedCreateWithoutIntegrationInputSchema
