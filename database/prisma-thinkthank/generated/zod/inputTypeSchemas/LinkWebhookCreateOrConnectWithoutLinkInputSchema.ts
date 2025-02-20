import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema'
import { LinkWebhookCreateWithoutLinkInputSchema } from './LinkWebhookCreateWithoutLinkInputSchema'
import { LinkWebhookUncheckedCreateWithoutLinkInputSchema } from './LinkWebhookUncheckedCreateWithoutLinkInputSchema'

export const LinkWebhookCreateOrConnectWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookCreateOrConnectWithoutLinkInput> = z
    .object({
        where: z.lazy(() => LinkWebhookWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LinkWebhookCreateWithoutLinkInputSchema),
            z.lazy(() => LinkWebhookUncheckedCreateWithoutLinkInputSchema)
        ])
    })
    .strict()

export default LinkWebhookCreateOrConnectWithoutLinkInputSchema
