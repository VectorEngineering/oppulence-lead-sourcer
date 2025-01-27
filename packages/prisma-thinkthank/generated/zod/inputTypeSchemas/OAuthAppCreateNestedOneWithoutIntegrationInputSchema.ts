import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppCreateWithoutIntegrationInputSchema } from './OAuthAppCreateWithoutIntegrationInputSchema'
import { OAuthAppUncheckedCreateWithoutIntegrationInputSchema } from './OAuthAppUncheckedCreateWithoutIntegrationInputSchema'
import { OAuthAppCreateOrConnectWithoutIntegrationInputSchema } from './OAuthAppCreateOrConnectWithoutIntegrationInputSchema'
import { OAuthAppWhereUniqueInputSchema } from './OAuthAppWhereUniqueInputSchema'

export const OAuthAppCreateNestedOneWithoutIntegrationInputSchema: z.ZodType<Prisma.OAuthAppCreateNestedOneWithoutIntegrationInput> = z
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

export default OAuthAppCreateNestedOneWithoutIntegrationInputSchema
