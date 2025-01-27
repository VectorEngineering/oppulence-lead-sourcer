import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateWithoutUserInputSchema } from './InstalledIntegrationCreateWithoutUserInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutUserInputSchema } from './InstalledIntegrationUncheckedCreateWithoutUserInputSchema'
import { InstalledIntegrationCreateOrConnectWithoutUserInputSchema } from './InstalledIntegrationCreateOrConnectWithoutUserInputSchema'
import { InstalledIntegrationCreateManyUserInputEnvelopeSchema } from './InstalledIntegrationCreateManyUserInputEnvelopeSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'

export const InstalledIntegrationCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateNestedManyWithoutUserInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateWithoutUserInputSchema),
                    z.lazy(() => InstalledIntegrationCreateWithoutUserInputSchema).array(),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutUserInputSchema),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutUserInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutUserInputSchema),
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutUserInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InstalledIntegrationCreateManyUserInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default InstalledIntegrationCreateNestedManyWithoutUserInputSchema
