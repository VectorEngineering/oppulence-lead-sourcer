import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookLogCreateWithoutWebhookInputSchema } from './WebhookLogCreateWithoutWebhookInputSchema'
import { WebhookLogUncheckedCreateWithoutWebhookInputSchema } from './WebhookLogUncheckedCreateWithoutWebhookInputSchema'
import { WebhookLogCreateOrConnectWithoutWebhookInputSchema } from './WebhookLogCreateOrConnectWithoutWebhookInputSchema'
import { WebhookLogCreateManyWebhookInputEnvelopeSchema } from './WebhookLogCreateManyWebhookInputEnvelopeSchema'
import { WebhookLogWhereUniqueInputSchema } from './WebhookLogWhereUniqueInputSchema'

export const WebhookLogUncheckedCreateNestedManyWithoutWebhookInputSchema: z.ZodType<Prisma.WebhookLogUncheckedCreateNestedManyWithoutWebhookInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => WebhookLogCreateWithoutWebhookInputSchema),
                    z.lazy(() => WebhookLogCreateWithoutWebhookInputSchema).array(),
                    z.lazy(() => WebhookLogUncheckedCreateWithoutWebhookInputSchema),
                    z.lazy(() => WebhookLogUncheckedCreateWithoutWebhookInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => WebhookLogCreateOrConnectWithoutWebhookInputSchema),
                    z.lazy(() => WebhookLogCreateOrConnectWithoutWebhookInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => WebhookLogCreateManyWebhookInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => WebhookLogWhereUniqueInputSchema), z.lazy(() => WebhookLogWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default WebhookLogUncheckedCreateNestedManyWithoutWebhookInputSchema
