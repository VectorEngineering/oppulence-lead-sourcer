import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateWithoutWebhookInputSchema } from './InstalledIntegrationCreateWithoutWebhookInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema } from './InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema'
import { InstalledIntegrationCreateOrConnectWithoutWebhookInputSchema } from './InstalledIntegrationCreateOrConnectWithoutWebhookInputSchema'
import { InstalledIntegrationUpsertWithoutWebhookInputSchema } from './InstalledIntegrationUpsertWithoutWebhookInputSchema'
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'
import { InstalledIntegrationUpdateToOneWithWhereWithoutWebhookInputSchema } from './InstalledIntegrationUpdateToOneWithWhereWithoutWebhookInputSchema'
import { InstalledIntegrationUpdateWithoutWebhookInputSchema } from './InstalledIntegrationUpdateWithoutWebhookInputSchema'
import { InstalledIntegrationUncheckedUpdateWithoutWebhookInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutWebhookInputSchema'

export const InstalledIntegrationUpdateOneWithoutWebhookNestedInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateOneWithoutWebhookNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateWithoutWebhookInputSchema),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => InstalledIntegrationCreateOrConnectWithoutWebhookInputSchema).optional(),
            upsert: z.lazy(() => InstalledIntegrationUpsertWithoutWebhookInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => InstalledIntegrationWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => InstalledIntegrationWhereInputSchema)]).optional(),
            connect: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => InstalledIntegrationUpdateToOneWithWhereWithoutWebhookInputSchema),
                    z.lazy(() => InstalledIntegrationUpdateWithoutWebhookInputSchema),
                    z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutWebhookInputSchema)
                ])
                .optional()
        })
        .strict()

export default InstalledIntegrationUpdateOneWithoutWebhookNestedInputSchema
