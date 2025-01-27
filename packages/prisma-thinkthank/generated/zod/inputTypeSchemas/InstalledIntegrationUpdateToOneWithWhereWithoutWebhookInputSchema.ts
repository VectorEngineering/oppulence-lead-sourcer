import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema'
import { InstalledIntegrationUpdateWithoutWebhookInputSchema } from './InstalledIntegrationUpdateWithoutWebhookInputSchema'
import { InstalledIntegrationUncheckedUpdateWithoutWebhookInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutWebhookInputSchema'

export const InstalledIntegrationUpdateToOneWithWhereWithoutWebhookInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateToOneWithWhereWithoutWebhookInput> =
    z
        .object({
            where: z.lazy(() => InstalledIntegrationWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => InstalledIntegrationUpdateWithoutWebhookInputSchema),
                z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutWebhookInputSchema)
            ])
        })
        .strict()

export default InstalledIntegrationUpdateToOneWithWhereWithoutWebhookInputSchema
