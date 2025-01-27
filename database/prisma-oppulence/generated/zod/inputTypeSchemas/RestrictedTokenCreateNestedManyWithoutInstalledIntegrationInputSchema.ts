import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenCreateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenCreateWithoutInstalledIntegrationInputSchema'
import { RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema'
import { RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema } from './RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema'
import { RestrictedTokenCreateManyInstalledIntegrationInputEnvelopeSchema } from './RestrictedTokenCreateManyInstalledIntegrationInputEnvelopeSchema'
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema'

export const RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => RestrictedTokenCreateWithoutInstalledIntegrationInputSchema),
                    z.lazy(() => RestrictedTokenCreateWithoutInstalledIntegrationInputSchema).array(),
                    z.lazy(() => RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema),
                    z.lazy(() => RestrictedTokenUncheckedCreateWithoutInstalledIntegrationInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema),
                    z.lazy(() => RestrictedTokenCreateOrConnectWithoutInstalledIntegrationInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => RestrictedTokenCreateManyInstalledIntegrationInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => RestrictedTokenWhereUniqueInputSchema), z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema
