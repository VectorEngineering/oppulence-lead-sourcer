import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkWebhookCreateManyInputSchema } from '../inputTypeSchemas/LinkWebhookCreateManyInputSchema'

export const LinkWebhookCreateManyArgsSchema: z.ZodType<Prisma.LinkWebhookCreateManyArgs> = z
    .object({
        data: z.union([LinkWebhookCreateManyInputSchema, LinkWebhookCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LinkWebhookCreateManyArgsSchema
