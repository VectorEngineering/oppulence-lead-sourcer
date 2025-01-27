import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema'
import { LinkWebhookCreateWithoutWebhookInputSchema } from './LinkWebhookCreateWithoutWebhookInputSchema'
import { LinkWebhookUncheckedCreateWithoutWebhookInputSchema } from './LinkWebhookUncheckedCreateWithoutWebhookInputSchema'

export const LinkWebhookCreateOrConnectWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookCreateOrConnectWithoutWebhookInput> = z
    .object({
        where: z.lazy(() => LinkWebhookWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LinkWebhookCreateWithoutWebhookInputSchema),
            z.lazy(() => LinkWebhookUncheckedCreateWithoutWebhookInputSchema)
        ])
    })
    .strict()

export default LinkWebhookCreateOrConnectWithoutWebhookInputSchema
