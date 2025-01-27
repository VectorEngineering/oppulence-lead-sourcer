import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateWithoutRefreshTokensInputSchema } from './InstalledIntegrationCreateWithoutRefreshTokensInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema'
import { InstalledIntegrationCreateOrConnectWithoutRefreshTokensInputSchema } from './InstalledIntegrationCreateOrConnectWithoutRefreshTokensInputSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'

export const InstalledIntegrationCreateNestedOneWithoutRefreshTokensInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateNestedOneWithoutRefreshTokensInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateWithoutRefreshTokensInputSchema),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => InstalledIntegrationCreateOrConnectWithoutRefreshTokensInputSchema).optional(),
            connect: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).optional()
        })
        .strict()

export default InstalledIntegrationCreateNestedOneWithoutRefreshTokensInputSchema
