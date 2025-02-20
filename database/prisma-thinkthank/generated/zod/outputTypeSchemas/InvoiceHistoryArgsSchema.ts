import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceHistorySelectSchema } from '../inputTypeSchemas/InvoiceHistorySelectSchema'
import { InvoiceHistoryIncludeSchema } from '../inputTypeSchemas/InvoiceHistoryIncludeSchema'

export const InvoiceHistoryArgsSchema: z.ZodType<Prisma.InvoiceHistoryDefaultArgs> = z
    .object({
        select: z.lazy(() => InvoiceHistorySelectSchema).optional(),
        include: z.lazy(() => InvoiceHistoryIncludeSchema).optional()
    })
    .strict()

export default InvoiceHistoryArgsSchema
