import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookCreateWithoutProjectInputSchema } from './WebhookCreateWithoutProjectInputSchema'
import { WebhookUncheckedCreateWithoutProjectInputSchema } from './WebhookUncheckedCreateWithoutProjectInputSchema'
import { WebhookCreateOrConnectWithoutProjectInputSchema } from './WebhookCreateOrConnectWithoutProjectInputSchema'
import { WebhookUpsertWithWhereUniqueWithoutProjectInputSchema } from './WebhookUpsertWithWhereUniqueWithoutProjectInputSchema'
import { WebhookCreateManyProjectInputEnvelopeSchema } from './WebhookCreateManyProjectInputEnvelopeSchema'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'
import { WebhookUpdateWithWhereUniqueWithoutProjectInputSchema } from './WebhookUpdateWithWhereUniqueWithoutProjectInputSchema'
import { WebhookUpdateManyWithWhereWithoutProjectInputSchema } from './WebhookUpdateManyWithWhereWithoutProjectInputSchema'
import { WebhookScalarWhereInputSchema } from './WebhookScalarWhereInputSchema'

export const WebhookUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.WebhookUpdateManyWithoutProjectNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => WebhookCreateWithoutProjectInputSchema),
                z.lazy(() => WebhookCreateWithoutProjectInputSchema).array(),
                z.lazy(() => WebhookUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => WebhookUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => WebhookCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => WebhookCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => WebhookUpsertWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => WebhookUpsertWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => WebhookCreateManyProjectInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => WebhookWhereUniqueInputSchema), z.lazy(() => WebhookWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => WebhookWhereUniqueInputSchema), z.lazy(() => WebhookWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => WebhookWhereUniqueInputSchema), z.lazy(() => WebhookWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => WebhookWhereUniqueInputSchema), z.lazy(() => WebhookWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => WebhookUpdateWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => WebhookUpdateWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => WebhookUpdateManyWithWhereWithoutProjectInputSchema),
                z.lazy(() => WebhookUpdateManyWithWhereWithoutProjectInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => WebhookScalarWhereInputSchema), z.lazy(() => WebhookScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default WebhookUpdateManyWithoutProjectNestedInputSchema
