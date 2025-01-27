import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema'
import { IntegrationCreateWithoutProjectInputSchema } from './IntegrationCreateWithoutProjectInputSchema'
import { IntegrationUncheckedCreateWithoutProjectInputSchema } from './IntegrationUncheckedCreateWithoutProjectInputSchema'

export const IntegrationCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.IntegrationCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => IntegrationWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => IntegrationCreateWithoutProjectInputSchema),
            z.lazy(() => IntegrationUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default IntegrationCreateOrConnectWithoutProjectInputSchema
