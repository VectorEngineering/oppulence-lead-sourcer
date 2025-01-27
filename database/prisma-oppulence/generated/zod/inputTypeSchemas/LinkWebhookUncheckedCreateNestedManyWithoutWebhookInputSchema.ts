import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWebhookCreateWithoutWebhookInputSchema } from './LinkWebhookCreateWithoutWebhookInputSchema'
import { LinkWebhookUncheckedCreateWithoutWebhookInputSchema } from './LinkWebhookUncheckedCreateWithoutWebhookInputSchema'
import { LinkWebhookCreateOrConnectWithoutWebhookInputSchema } from './LinkWebhookCreateOrConnectWithoutWebhookInputSchema'
import { LinkWebhookCreateManyWebhookInputEnvelopeSchema } from './LinkWebhookCreateManyWebhookInputEnvelopeSchema'
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema'

export const LinkWebhookUncheckedCreateNestedManyWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookUncheckedCreateNestedManyWithoutWebhookInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LinkWebhookCreateWithoutWebhookInputSchema),
                    z.lazy(() => LinkWebhookCreateWithoutWebhookInputSchema).array(),
                    z.lazy(() => LinkWebhookUncheckedCreateWithoutWebhookInputSchema),
                    z.lazy(() => LinkWebhookUncheckedCreateWithoutWebhookInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LinkWebhookCreateOrConnectWithoutWebhookInputSchema),
                    z.lazy(() => LinkWebhookCreateOrConnectWithoutWebhookInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LinkWebhookCreateManyWebhookInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => LinkWebhookWhereUniqueInputSchema), z.lazy(() => LinkWebhookWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default LinkWebhookUncheckedCreateNestedManyWithoutWebhookInputSchema
