import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionAttachmentCountOutputTypeSelectSchema } from './TransactionAttachmentCountOutputTypeSelectSchema'

export const TransactionAttachmentCountOutputTypeArgsSchema: z.ZodType<Prisma.TransactionAttachmentCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => TransactionAttachmentCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default TransactionAttachmentCountOutputTypeSelectSchema
