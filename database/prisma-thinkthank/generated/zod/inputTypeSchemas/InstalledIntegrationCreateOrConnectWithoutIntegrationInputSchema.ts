import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'
import { InstalledIntegrationCreateWithoutIntegrationInputSchema } from './InstalledIntegrationCreateWithoutIntegrationInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema } from './InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema'

export const InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateOrConnectWithoutIntegrationInput> =
    z
        .object({
            where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => InstalledIntegrationCreateWithoutIntegrationInputSchema),
                z.lazy(() => InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema)
            ])
        })
        .strict()

export default InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema
