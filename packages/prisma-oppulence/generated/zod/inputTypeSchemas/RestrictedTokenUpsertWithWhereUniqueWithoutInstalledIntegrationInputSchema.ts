import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema'
import { RestrictedTokenUpdateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUpdateWithoutInstalledIntegrationInputSchema'
import { RestrictedTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema'
import { RestrictedTokenCreateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenCreateWithoutInstalledIntegrationInputSchema'
import { RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema'

export const RestrictedTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.RestrictedTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInput> =
    z
        .object({
            where: z.lazy(() => RestrictedTokenWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => RestrictedTokenUpdateWithoutInstalledIntegrationInputSchema),
                z.lazy(() => RestrictedTokenUncheckedUpdateWithoutInstalledIntegrationInputSchema)
            ]),
            create: z.union([
                z.lazy(() => RestrictedTokenCreateWithoutInstalledIntegrationInputSchema),
                z.lazy(() => RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema)
            ])
        })
        .strict()

export default RestrictedTokenUpsertWithWhereUniqueWithoutInstalledIntegrationInputSchema
