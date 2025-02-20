import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationCreateWithoutInstallationsInputSchema } from './IntegrationCreateWithoutInstallationsInputSchema'
import { IntegrationUncheckedCreateWithoutInstallationsInputSchema } from './IntegrationUncheckedCreateWithoutInstallationsInputSchema'
import { IntegrationCreateOrConnectWithoutInstallationsInputSchema } from './IntegrationCreateOrConnectWithoutInstallationsInputSchema'
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema'

export const IntegrationCreateNestedOneWithoutInstallationsInputSchema: z.ZodType<Prisma.IntegrationCreateNestedOneWithoutInstallationsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => IntegrationCreateWithoutInstallationsInputSchema),
                    z.lazy(() => IntegrationUncheckedCreateWithoutInstallationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => IntegrationCreateOrConnectWithoutInstallationsInputSchema).optional(),
            connect: z.lazy(() => IntegrationWhereUniqueInputSchema).optional()
        })
        .strict()

export default IntegrationCreateNestedOneWithoutInstallationsInputSchema
