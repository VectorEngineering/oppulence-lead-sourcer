import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppCreateWithoutOAuthCodesInputSchema } from './OAuthAppCreateWithoutOAuthCodesInputSchema'
import { OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema } from './OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema'
import { OAuthAppCreateOrConnectWithoutOAuthCodesInputSchema } from './OAuthAppCreateOrConnectWithoutOAuthCodesInputSchema'
import { OAuthAppUpsertWithoutOAuthCodesInputSchema } from './OAuthAppUpsertWithoutOAuthCodesInputSchema'
import { OAuthAppWhereUniqueInputSchema } from './OAuthAppWhereUniqueInputSchema'
import { OAuthAppUpdateToOneWithWhereWithoutOAuthCodesInputSchema } from './OAuthAppUpdateToOneWithWhereWithoutOAuthCodesInputSchema'
import { OAuthAppUpdateWithoutOAuthCodesInputSchema } from './OAuthAppUpdateWithoutOAuthCodesInputSchema'
import { OAuthAppUncheckedUpdateWithoutOAuthCodesInputSchema } from './OAuthAppUncheckedUpdateWithoutOAuthCodesInputSchema'

export const OAuthAppUpdateOneRequiredWithoutOAuthCodesNestedInputSchema: z.ZodType<Prisma.OAuthAppUpdateOneRequiredWithoutOAuthCodesNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => OAuthAppCreateWithoutOAuthCodesInputSchema),
                    z.lazy(() => OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => OAuthAppCreateOrConnectWithoutOAuthCodesInputSchema).optional(),
            upsert: z.lazy(() => OAuthAppUpsertWithoutOAuthCodesInputSchema).optional(),
            connect: z.lazy(() => OAuthAppWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => OAuthAppUpdateToOneWithWhereWithoutOAuthCodesInputSchema),
                    z.lazy(() => OAuthAppUpdateWithoutOAuthCodesInputSchema),
                    z.lazy(() => OAuthAppUncheckedUpdateWithoutOAuthCodesInputSchema)
                ])
                .optional()
        })
        .strict()

export default OAuthAppUpdateOneRequiredWithoutOAuthCodesNestedInputSchema
