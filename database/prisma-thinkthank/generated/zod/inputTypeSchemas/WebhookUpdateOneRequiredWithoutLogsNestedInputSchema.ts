import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookCreateWithoutLogsInputSchema } from './WebhookCreateWithoutLogsInputSchema'
import { WebhookUncheckedCreateWithoutLogsInputSchema } from './WebhookUncheckedCreateWithoutLogsInputSchema'
import { WebhookCreateOrConnectWithoutLogsInputSchema } from './WebhookCreateOrConnectWithoutLogsInputSchema'
import { WebhookUpsertWithoutLogsInputSchema } from './WebhookUpsertWithoutLogsInputSchema'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'
import { WebhookUpdateToOneWithWhereWithoutLogsInputSchema } from './WebhookUpdateToOneWithWhereWithoutLogsInputSchema'
import { WebhookUpdateWithoutLogsInputSchema } from './WebhookUpdateWithoutLogsInputSchema'
import { WebhookUncheckedUpdateWithoutLogsInputSchema } from './WebhookUncheckedUpdateWithoutLogsInputSchema'

export const WebhookUpdateOneRequiredWithoutLogsNestedInputSchema: z.ZodType<Prisma.WebhookUpdateOneRequiredWithoutLogsNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => WebhookCreateWithoutLogsInputSchema), z.lazy(() => WebhookUncheckedCreateWithoutLogsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => WebhookCreateOrConnectWithoutLogsInputSchema).optional(),
        upsert: z.lazy(() => WebhookUpsertWithoutLogsInputSchema).optional(),
        connect: z.lazy(() => WebhookWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => WebhookUpdateToOneWithWhereWithoutLogsInputSchema),
                z.lazy(() => WebhookUpdateWithoutLogsInputSchema),
                z.lazy(() => WebhookUncheckedUpdateWithoutLogsInputSchema)
            ])
            .optional()
    })
    .strict()

export default WebhookUpdateOneRequiredWithoutLogsNestedInputSchema
