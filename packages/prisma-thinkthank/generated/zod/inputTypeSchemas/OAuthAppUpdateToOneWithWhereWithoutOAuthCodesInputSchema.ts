import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema'
import { OAuthAppUpdateWithoutOAuthCodesInputSchema } from './OAuthAppUpdateWithoutOAuthCodesInputSchema'
import { OAuthAppUncheckedUpdateWithoutOAuthCodesInputSchema } from './OAuthAppUncheckedUpdateWithoutOAuthCodesInputSchema'

export const OAuthAppUpdateToOneWithWhereWithoutOAuthCodesInputSchema: z.ZodType<Prisma.OAuthAppUpdateToOneWithWhereWithoutOAuthCodesInput> =
    z
        .object({
            where: z.lazy(() => OAuthAppWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => OAuthAppUpdateWithoutOAuthCodesInputSchema),
                z.lazy(() => OAuthAppUncheckedUpdateWithoutOAuthCodesInputSchema)
            ])
        })
        .strict()

export default OAuthAppUpdateToOneWithWhereWithoutOAuthCodesInputSchema
