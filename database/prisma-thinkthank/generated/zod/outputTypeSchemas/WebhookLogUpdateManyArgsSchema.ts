import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/WebhookLogUpdateManyMutationInputSchema'
import { WebhookLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WebhookLogUncheckedUpdateManyInputSchema'
import { WebhookLogWhereInputSchema } from '../inputTypeSchemas/WebhookLogWhereInputSchema'

export const WebhookLogUpdateManyArgsSchema: z.ZodType<Prisma.WebhookLogUpdateManyArgs> = z
    .object({
        data: z.union([WebhookLogUpdateManyMutationInputSchema, WebhookLogUncheckedUpdateManyInputSchema]),
        where: WebhookLogWhereInputSchema.optional()
    })
    .strict()

export default WebhookLogUpdateManyArgsSchema
