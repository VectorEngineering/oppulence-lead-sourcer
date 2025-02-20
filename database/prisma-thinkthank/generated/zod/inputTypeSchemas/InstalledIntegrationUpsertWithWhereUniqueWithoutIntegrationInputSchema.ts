import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'
import { InstalledIntegrationUpdateWithoutIntegrationInputSchema } from './InstalledIntegrationUpdateWithoutIntegrationInputSchema'
import { InstalledIntegrationUncheckedUpdateWithoutIntegrationInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutIntegrationInputSchema'
import { InstalledIntegrationCreateWithoutIntegrationInputSchema } from './InstalledIntegrationCreateWithoutIntegrationInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema } from './InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema'

export const InstalledIntegrationUpsertWithWhereUniqueWithoutIntegrationInputSchema: z.ZodType<Prisma.InstalledIntegrationUpsertWithWhereUniqueWithoutIntegrationInput> =
    z
        .object({
            where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => InstalledIntegrationUpdateWithoutIntegrationInputSchema),
                z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutIntegrationInputSchema)
            ]),
            create: z.union([
                z.lazy(() => InstalledIntegrationCreateWithoutIntegrationInputSchema),
                z.lazy(() => InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema)
            ])
        })
        .strict()

export default InstalledIntegrationUpsertWithWhereUniqueWithoutIntegrationInputSchema
