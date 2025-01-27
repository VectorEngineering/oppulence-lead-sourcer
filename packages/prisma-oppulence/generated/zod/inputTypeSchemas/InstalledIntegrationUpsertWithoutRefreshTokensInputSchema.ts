import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationUpdateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUpdateWithoutRefreshTokensInputSchema'
import { InstalledIntegrationUncheckedUpdateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutRefreshTokensInputSchema'
import { InstalledIntegrationCreateWithoutRefreshTokensInputSchema } from './InstalledIntegrationCreateWithoutRefreshTokensInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema'
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema'

export const InstalledIntegrationUpsertWithoutRefreshTokensInputSchema: z.ZodType<Prisma.InstalledIntegrationUpsertWithoutRefreshTokensInput> =
    z
        .object({
            update: z.union([
                z.lazy(() => InstalledIntegrationUpdateWithoutRefreshTokensInputSchema),
                z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutRefreshTokensInputSchema)
            ]),
            create: z.union([
                z.lazy(() => InstalledIntegrationCreateWithoutRefreshTokensInputSchema),
                z.lazy(() => InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema)
            ]),
            where: z.lazy(() => InstalledIntegrationWhereInputSchema).optional()
        })
        .strict()

export default InstalledIntegrationUpsertWithoutRefreshTokensInputSchema
