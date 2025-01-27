import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookLogCreateWithoutWebhookInputSchema } from './WebhookLogCreateWithoutWebhookInputSchema'
import { WebhookLogUncheckedCreateWithoutWebhookInputSchema } from './WebhookLogUncheckedCreateWithoutWebhookInputSchema'
import { WebhookLogCreateOrConnectWithoutWebhookInputSchema } from './WebhookLogCreateOrConnectWithoutWebhookInputSchema'
import { WebhookLogUpsertWithWhereUniqueWithoutWebhookInputSchema } from './WebhookLogUpsertWithWhereUniqueWithoutWebhookInputSchema'
import { WebhookLogCreateManyWebhookInputEnvelopeSchema } from './WebhookLogCreateManyWebhookInputEnvelopeSchema'
import { WebhookLogWhereUniqueInputSchema } from './WebhookLogWhereUniqueInputSchema'
import { WebhookLogUpdateWithWhereUniqueWithoutWebhookInputSchema } from './WebhookLogUpdateWithWhereUniqueWithoutWebhookInputSchema'
import { WebhookLogUpdateManyWithWhereWithoutWebhookInputSchema } from './WebhookLogUpdateManyWithWhereWithoutWebhookInputSchema'
import { WebhookLogScalarWhereInputSchema } from './WebhookLogScalarWhereInputSchema'

export const WebhookLogUpdateManyWithoutWebhookNestedInputSchema: z.ZodType<Prisma.WebhookLogUpdateManyWithoutWebhookNestedInput> = z
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
        upsert: z
            .union([
                z.lazy(() => WebhookLogUpsertWithWhereUniqueWithoutWebhookInputSchema),
                z.lazy(() => WebhookLogUpsertWithWhereUniqueWithoutWebhookInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => WebhookLogCreateManyWebhookInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => WebhookLogWhereUniqueInputSchema), z.lazy(() => WebhookLogWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => WebhookLogWhereUniqueInputSchema), z.lazy(() => WebhookLogWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => WebhookLogWhereUniqueInputSchema), z.lazy(() => WebhookLogWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => WebhookLogWhereUniqueInputSchema), z.lazy(() => WebhookLogWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => WebhookLogUpdateWithWhereUniqueWithoutWebhookInputSchema),
                z.lazy(() => WebhookLogUpdateWithWhereUniqueWithoutWebhookInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => WebhookLogUpdateManyWithWhereWithoutWebhookInputSchema),
                z.lazy(() => WebhookLogUpdateManyWithWhereWithoutWebhookInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => WebhookLogScalarWhereInputSchema), z.lazy(() => WebhookLogScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default WebhookLogUpdateManyWithoutWebhookNestedInputSchema
