import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'
import { InstalledIntegrationUpdateWithoutProjectInputSchema } from './InstalledIntegrationUpdateWithoutProjectInputSchema'
import { InstalledIntegrationUncheckedUpdateWithoutProjectInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutProjectInputSchema'

export const InstalledIntegrationUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => InstalledIntegrationUpdateWithoutProjectInputSchema),
                z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default InstalledIntegrationUpdateWithWhereUniqueWithoutProjectInputSchema
