import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookUpdateManyMutationInputSchema } from '../inputTypeSchemas/WebhookUpdateManyMutationInputSchema'
import { WebhookUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WebhookUncheckedUpdateManyInputSchema'
import { WebhookWhereInputSchema } from '../inputTypeSchemas/WebhookWhereInputSchema'

export const WebhookUpdateManyArgsSchema: z.ZodType<Prisma.WebhookUpdateManyArgs> = z
    .object({
        data: z.union([WebhookUpdateManyMutationInputSchema, WebhookUncheckedUpdateManyInputSchema]),
        where: WebhookWhereInputSchema.optional()
    })
    .strict()

export default WebhookUpdateManyArgsSchema
