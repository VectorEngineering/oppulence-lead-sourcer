import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema'
import { IntegrationUpdateWithoutProjectInputSchema } from './IntegrationUpdateWithoutProjectInputSchema'
import { IntegrationUncheckedUpdateWithoutProjectInputSchema } from './IntegrationUncheckedUpdateWithoutProjectInputSchema'
import { IntegrationCreateWithoutProjectInputSchema } from './IntegrationCreateWithoutProjectInputSchema'
import { IntegrationUncheckedCreateWithoutProjectInputSchema } from './IntegrationUncheckedCreateWithoutProjectInputSchema'

export const IntegrationUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.IntegrationUpsertWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => IntegrationWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => IntegrationUpdateWithoutProjectInputSchema),
                z.lazy(() => IntegrationUncheckedUpdateWithoutProjectInputSchema)
            ]),
            create: z.union([
                z.lazy(() => IntegrationCreateWithoutProjectInputSchema),
                z.lazy(() => IntegrationUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default IntegrationUpsertWithWhereUniqueWithoutProjectInputSchema
