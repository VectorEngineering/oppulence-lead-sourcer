import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'
import { InstalledIntegrationCreateWithoutAccessTokensInputSchema } from './InstalledIntegrationCreateWithoutAccessTokensInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema } from './InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema'

export const InstalledIntegrationCreateOrConnectWithoutAccessTokensInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateOrConnectWithoutAccessTokensInput> =
    z
        .object({
            where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => InstalledIntegrationCreateWithoutAccessTokensInputSchema),
                z.lazy(() => InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema)
            ])
        })
        .strict()

export default InstalledIntegrationCreateOrConnectWithoutAccessTokensInputSchema
