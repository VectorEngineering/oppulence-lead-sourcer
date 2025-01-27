import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema'
import { LinkWebhookUpdateWithoutWebhookInputSchema } from './LinkWebhookUpdateWithoutWebhookInputSchema'
import { LinkWebhookUncheckedUpdateWithoutWebhookInputSchema } from './LinkWebhookUncheckedUpdateWithoutWebhookInputSchema'

export const LinkWebhookUpdateWithWhereUniqueWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookUpdateWithWhereUniqueWithoutWebhookInput> =
    z
        .object({
            where: z.lazy(() => LinkWebhookWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LinkWebhookUpdateWithoutWebhookInputSchema),
                z.lazy(() => LinkWebhookUncheckedUpdateWithoutWebhookInputSchema)
            ])
        })
        .strict()

export default LinkWebhookUpdateWithWhereUniqueWithoutWebhookInputSchema
