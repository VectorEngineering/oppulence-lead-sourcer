import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookCreateWithoutBankConnectionSettingsInputSchema } from './WebhookCreateWithoutBankConnectionSettingsInputSchema'
import { WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema } from './WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema'
import { WebhookCreateOrConnectWithoutBankConnectionSettingsInputSchema } from './WebhookCreateOrConnectWithoutBankConnectionSettingsInputSchema'
import { WebhookUpsertWithWhereUniqueWithoutBankConnectionSettingsInputSchema } from './WebhookUpsertWithWhereUniqueWithoutBankConnectionSettingsInputSchema'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'
import { WebhookUpdateWithWhereUniqueWithoutBankConnectionSettingsInputSchema } from './WebhookUpdateWithWhereUniqueWithoutBankConnectionSettingsInputSchema'
import { WebhookUpdateManyWithWhereWithoutBankConnectionSettingsInputSchema } from './WebhookUpdateManyWithWhereWithoutBankConnectionSettingsInputSchema'
import { WebhookScalarWhereInputSchema } from './WebhookScalarWhereInputSchema'

export const WebhookUncheckedUpdateManyWithoutBankConnectionSettingsNestedInputSchema: z.ZodType<Prisma.WebhookUncheckedUpdateManyWithoutBankConnectionSettingsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => WebhookCreateWithoutBankConnectionSettingsInputSchema),
                    z.lazy(() => WebhookCreateWithoutBankConnectionSettingsInputSchema).array(),
                    z.lazy(() => WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema),
                    z.lazy(() => WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => WebhookCreateOrConnectWithoutBankConnectionSettingsInputSchema),
                    z.lazy(() => WebhookCreateOrConnectWithoutBankConnectionSettingsInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => WebhookUpsertWithWhereUniqueWithoutBankConnectionSettingsInputSchema),
                    z.lazy(() => WebhookUpsertWithWhereUniqueWithoutBankConnectionSettingsInputSchema).array()
                ])
                .optional(),
            set: z.union([z.lazy(() => WebhookWhereUniqueInputSchema), z.lazy(() => WebhookWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => WebhookWhereUniqueInputSchema), z.lazy(() => WebhookWhereUniqueInputSchema).array()])
                .optional(),
            delete: z.union([z.lazy(() => WebhookWhereUniqueInputSchema), z.lazy(() => WebhookWhereUniqueInputSchema).array()]).optional(),
            connect: z.union([z.lazy(() => WebhookWhereUniqueInputSchema), z.lazy(() => WebhookWhereUniqueInputSchema).array()]).optional(),
            update: z
                .union([
                    z.lazy(() => WebhookUpdateWithWhereUniqueWithoutBankConnectionSettingsInputSchema),
                    z.lazy(() => WebhookUpdateWithWhereUniqueWithoutBankConnectionSettingsInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => WebhookUpdateManyWithWhereWithoutBankConnectionSettingsInputSchema),
                    z.lazy(() => WebhookUpdateManyWithWhereWithoutBankConnectionSettingsInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => WebhookScalarWhereInputSchema), z.lazy(() => WebhookScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default WebhookUncheckedUpdateManyWithoutBankConnectionSettingsNestedInputSchema
