import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationUpdateWithoutInstallationsInputSchema } from './IntegrationUpdateWithoutInstallationsInputSchema'
import { IntegrationUncheckedUpdateWithoutInstallationsInputSchema } from './IntegrationUncheckedUpdateWithoutInstallationsInputSchema'
import { IntegrationCreateWithoutInstallationsInputSchema } from './IntegrationCreateWithoutInstallationsInputSchema'
import { IntegrationUncheckedCreateWithoutInstallationsInputSchema } from './IntegrationUncheckedCreateWithoutInstallationsInputSchema'
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema'

export const IntegrationUpsertWithoutInstallationsInputSchema: z.ZodType<Prisma.IntegrationUpsertWithoutInstallationsInput> = z
    .object({
        update: z.union([
            z.lazy(() => IntegrationUpdateWithoutInstallationsInputSchema),
            z.lazy(() => IntegrationUncheckedUpdateWithoutInstallationsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => IntegrationCreateWithoutInstallationsInputSchema),
            z.lazy(() => IntegrationUncheckedCreateWithoutInstallationsInputSchema)
        ]),
        where: z.lazy(() => IntegrationWhereInputSchema).optional()
    })
    .strict()

export default IntegrationUpsertWithoutInstallationsInputSchema
