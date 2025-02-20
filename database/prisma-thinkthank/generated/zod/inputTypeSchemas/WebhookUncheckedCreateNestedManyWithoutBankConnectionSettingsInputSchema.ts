import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookCreateWithoutBankConnectionSettingsInputSchema } from './WebhookCreateWithoutBankConnectionSettingsInputSchema'
import { WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema } from './WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema'
import { WebhookCreateOrConnectWithoutBankConnectionSettingsInputSchema } from './WebhookCreateOrConnectWithoutBankConnectionSettingsInputSchema'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'

export const WebhookUncheckedCreateNestedManyWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.WebhookUncheckedCreateNestedManyWithoutBankConnectionSettingsInput> =
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
            connect: z.union([z.lazy(() => WebhookWhereUniqueInputSchema), z.lazy(() => WebhookWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default WebhookUncheckedCreateNestedManyWithoutBankConnectionSettingsInputSchema
