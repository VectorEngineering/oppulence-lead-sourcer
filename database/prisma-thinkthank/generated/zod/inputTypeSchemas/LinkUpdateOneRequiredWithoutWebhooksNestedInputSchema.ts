import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateWithoutWebhooksInputSchema } from './LinkCreateWithoutWebhooksInputSchema'
import { LinkUncheckedCreateWithoutWebhooksInputSchema } from './LinkUncheckedCreateWithoutWebhooksInputSchema'
import { LinkCreateOrConnectWithoutWebhooksInputSchema } from './LinkCreateOrConnectWithoutWebhooksInputSchema'
import { LinkUpsertWithoutWebhooksInputSchema } from './LinkUpsertWithoutWebhooksInputSchema'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateToOneWithWhereWithoutWebhooksInputSchema } from './LinkUpdateToOneWithWhereWithoutWebhooksInputSchema'
import { LinkUpdateWithoutWebhooksInputSchema } from './LinkUpdateWithoutWebhooksInputSchema'
import { LinkUncheckedUpdateWithoutWebhooksInputSchema } from './LinkUncheckedUpdateWithoutWebhooksInputSchema'

export const LinkUpdateOneRequiredWithoutWebhooksNestedInputSchema: z.ZodType<Prisma.LinkUpdateOneRequiredWithoutWebhooksNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => LinkCreateWithoutWebhooksInputSchema), z.lazy(() => LinkUncheckedCreateWithoutWebhooksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutWebhooksInputSchema).optional(),
        upsert: z.lazy(() => LinkUpsertWithoutWebhooksInputSchema).optional(),
        connect: z.lazy(() => LinkWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => LinkUpdateToOneWithWhereWithoutWebhooksInputSchema),
                z.lazy(() => LinkUpdateWithoutWebhooksInputSchema),
                z.lazy(() => LinkUncheckedUpdateWithoutWebhooksInputSchema)
            ])
            .optional()
    })
    .strict()

export default LinkUpdateOneRequiredWithoutWebhooksNestedInputSchema
