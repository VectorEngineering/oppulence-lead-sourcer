import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const LinkWebhookUpdateManyMutationInputSchema: z.ZodType<Prisma.LinkWebhookUpdateManyMutationInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default LinkWebhookUpdateManyMutationInputSchema
