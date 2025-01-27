import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWebhookCreateWithoutLinkInputSchema } from './LinkWebhookCreateWithoutLinkInputSchema'
import { LinkWebhookUncheckedCreateWithoutLinkInputSchema } from './LinkWebhookUncheckedCreateWithoutLinkInputSchema'
import { LinkWebhookCreateOrConnectWithoutLinkInputSchema } from './LinkWebhookCreateOrConnectWithoutLinkInputSchema'
import { LinkWebhookCreateManyLinkInputEnvelopeSchema } from './LinkWebhookCreateManyLinkInputEnvelopeSchema'
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema'

export const LinkWebhookUncheckedCreateNestedManyWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookUncheckedCreateNestedManyWithoutLinkInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LinkWebhookCreateWithoutLinkInputSchema),
                    z.lazy(() => LinkWebhookCreateWithoutLinkInputSchema).array(),
                    z.lazy(() => LinkWebhookUncheckedCreateWithoutLinkInputSchema),
                    z.lazy(() => LinkWebhookUncheckedCreateWithoutLinkInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LinkWebhookCreateOrConnectWithoutLinkInputSchema),
                    z.lazy(() => LinkWebhookCreateOrConnectWithoutLinkInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LinkWebhookCreateManyLinkInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => LinkWebhookWhereUniqueInputSchema), z.lazy(() => LinkWebhookWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default LinkWebhookUncheckedCreateNestedManyWithoutLinkInputSchema
