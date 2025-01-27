import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/InvoiceHistoryUpdateManyMutationInputSchema'
import { InvoiceHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InvoiceHistoryUncheckedUpdateManyInputSchema'
import { InvoiceHistoryWhereInputSchema } from '../inputTypeSchemas/InvoiceHistoryWhereInputSchema'

export const InvoiceHistoryUpdateManyArgsSchema: z.ZodType<Prisma.InvoiceHistoryUpdateManyArgs> = z
    .object({
        data: z.union([InvoiceHistoryUpdateManyMutationInputSchema, InvoiceHistoryUncheckedUpdateManyInputSchema]),
        where: InvoiceHistoryWhereInputSchema.optional()
    })
    .strict()

export default InvoiceHistoryUpdateManyArgsSchema
