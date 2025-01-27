import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateWithoutProjectInputSchema } from './InstalledIntegrationCreateWithoutProjectInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutProjectInputSchema } from './InstalledIntegrationUncheckedCreateWithoutProjectInputSchema'
import { InstalledIntegrationCreateOrConnectWithoutProjectInputSchema } from './InstalledIntegrationCreateOrConnectWithoutProjectInputSchema'
import { InstalledIntegrationCreateManyProjectInputEnvelopeSchema } from './InstalledIntegrationCreateManyProjectInputEnvelopeSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'

export const InstalledIntegrationCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateNestedManyWithoutProjectInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateWithoutProjectInputSchema),
                    z.lazy(() => InstalledIntegrationCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InstalledIntegrationCreateManyProjectInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default InstalledIntegrationCreateNestedManyWithoutProjectInputSchema
