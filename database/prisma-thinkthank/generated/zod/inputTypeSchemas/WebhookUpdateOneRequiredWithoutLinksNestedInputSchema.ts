import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookCreateWithoutLinksInputSchema } from './WebhookCreateWithoutLinksInputSchema'
import { WebhookUncheckedCreateWithoutLinksInputSchema } from './WebhookUncheckedCreateWithoutLinksInputSchema'
import { WebhookCreateOrConnectWithoutLinksInputSchema } from './WebhookCreateOrConnectWithoutLinksInputSchema'
import { WebhookUpsertWithoutLinksInputSchema } from './WebhookUpsertWithoutLinksInputSchema'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'
import { WebhookUpdateToOneWithWhereWithoutLinksInputSchema } from './WebhookUpdateToOneWithWhereWithoutLinksInputSchema'
import { WebhookUpdateWithoutLinksInputSchema } from './WebhookUpdateWithoutLinksInputSchema'
import { WebhookUncheckedUpdateWithoutLinksInputSchema } from './WebhookUncheckedUpdateWithoutLinksInputSchema'

export const WebhookUpdateOneRequiredWithoutLinksNestedInputSchema: z.ZodType<Prisma.WebhookUpdateOneRequiredWithoutLinksNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => WebhookCreateWithoutLinksInputSchema), z.lazy(() => WebhookUncheckedCreateWithoutLinksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => WebhookCreateOrConnectWithoutLinksInputSchema).optional(),
        upsert: z.lazy(() => WebhookUpsertWithoutLinksInputSchema).optional(),
        connect: z.lazy(() => WebhookWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => WebhookUpdateToOneWithWhereWithoutLinksInputSchema),
                z.lazy(() => WebhookUpdateWithoutLinksInputSchema),
                z.lazy(() => WebhookUncheckedUpdateWithoutLinksInputSchema)
            ])
            .optional()
    })
    .strict()

export default WebhookUpdateOneRequiredWithoutLinksNestedInputSchema
