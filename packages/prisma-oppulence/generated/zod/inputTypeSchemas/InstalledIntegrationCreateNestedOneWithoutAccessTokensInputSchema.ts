import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateWithoutAccessTokensInputSchema } from './InstalledIntegrationCreateWithoutAccessTokensInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema } from './InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema'
import { InstalledIntegrationCreateOrConnectWithoutAccessTokensInputSchema } from './InstalledIntegrationCreateOrConnectWithoutAccessTokensInputSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'

export const InstalledIntegrationCreateNestedOneWithoutAccessTokensInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateNestedOneWithoutAccessTokensInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateWithoutAccessTokensInputSchema),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => InstalledIntegrationCreateOrConnectWithoutAccessTokensInputSchema).optional(),
            connect: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).optional()
        })
        .strict()

export default InstalledIntegrationCreateNestedOneWithoutAccessTokensInputSchema
