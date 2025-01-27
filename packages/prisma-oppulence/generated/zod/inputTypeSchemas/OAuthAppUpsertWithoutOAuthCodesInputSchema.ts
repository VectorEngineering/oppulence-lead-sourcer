import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppUpdateWithoutOAuthCodesInputSchema } from './OAuthAppUpdateWithoutOAuthCodesInputSchema'
import { OAuthAppUncheckedUpdateWithoutOAuthCodesInputSchema } from './OAuthAppUncheckedUpdateWithoutOAuthCodesInputSchema'
import { OAuthAppCreateWithoutOAuthCodesInputSchema } from './OAuthAppCreateWithoutOAuthCodesInputSchema'
import { OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema } from './OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema'
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema'

export const OAuthAppUpsertWithoutOAuthCodesInputSchema: z.ZodType<Prisma.OAuthAppUpsertWithoutOAuthCodesInput> = z
    .object({
        update: z.union([
            z.lazy(() => OAuthAppUpdateWithoutOAuthCodesInputSchema),
            z.lazy(() => OAuthAppUncheckedUpdateWithoutOAuthCodesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => OAuthAppCreateWithoutOAuthCodesInputSchema),
            z.lazy(() => OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema)
        ]),
        where: z.lazy(() => OAuthAppWhereInputSchema).optional()
    })
    .strict()

export default OAuthAppUpsertWithoutOAuthCodesInputSchema
