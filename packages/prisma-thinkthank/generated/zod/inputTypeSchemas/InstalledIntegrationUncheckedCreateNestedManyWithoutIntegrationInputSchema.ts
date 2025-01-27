import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateWithoutIntegrationInputSchema } from './InstalledIntegrationCreateWithoutIntegrationInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema } from './InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema'
import { InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema } from './InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema'
import { InstalledIntegrationCreateManyIntegrationInputEnvelopeSchema } from './InstalledIntegrationCreateManyIntegrationInputEnvelopeSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'

export const InstalledIntegrationUncheckedCreateNestedManyWithoutIntegrationInputSchema: z.ZodType<Prisma.InstalledIntegrationUncheckedCreateNestedManyWithoutIntegrationInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateWithoutIntegrationInputSchema),
                    z.lazy(() => InstalledIntegrationCreateWithoutIntegrationInputSchema).array(),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema),
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InstalledIntegrationCreateManyIntegrationInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default InstalledIntegrationUncheckedCreateNestedManyWithoutIntegrationInputSchema
