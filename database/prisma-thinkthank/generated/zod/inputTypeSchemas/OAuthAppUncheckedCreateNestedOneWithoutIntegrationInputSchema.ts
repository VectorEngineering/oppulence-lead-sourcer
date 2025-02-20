import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppCreateWithoutIntegrationInputSchema } from './OAuthAppCreateWithoutIntegrationInputSchema'
import { OAuthAppUncheckedCreateWithoutIntegrationInputSchema } from './OAuthAppUncheckedCreateWithoutIntegrationInputSchema'
import { OAuthAppCreateOrConnectWithoutIntegrationInputSchema } from './OAuthAppCreateOrConnectWithoutIntegrationInputSchema'
import { OAuthAppWhereUniqueInputSchema } from './OAuthAppWhereUniqueInputSchema'

export const OAuthAppUncheckedCreateNestedOneWithoutIntegrationInputSchema: z.ZodType<Prisma.OAuthAppUncheckedCreateNestedOneWithoutIntegrationInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => OAuthAppCreateWithoutIntegrationInputSchema),
                    z.lazy(() => OAuthAppUncheckedCreateWithoutIntegrationInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => OAuthAppCreateOrConnectWithoutIntegrationInputSchema).optional(),
            connect: z.lazy(() => OAuthAppWhereUniqueInputSchema).optional()
        })
        .strict()

export default OAuthAppUncheckedCreateNestedOneWithoutIntegrationInputSchema
