import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookLogWhereInputSchema } from '../inputTypeSchemas/WebhookLogWhereInputSchema'

export const WebhookLogDeleteManyArgsSchema: z.ZodType<Prisma.WebhookLogDeleteManyArgs> = z
    .object({
        where: WebhookLogWhereInputSchema.optional()
    })
    .strict()

export default WebhookLogDeleteManyArgsSchema
