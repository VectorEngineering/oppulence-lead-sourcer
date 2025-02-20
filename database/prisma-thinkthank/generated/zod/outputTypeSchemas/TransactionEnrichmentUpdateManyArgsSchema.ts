import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionEnrichmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/TransactionEnrichmentUpdateManyMutationInputSchema'
import { TransactionEnrichmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TransactionEnrichmentUncheckedUpdateManyInputSchema'
import { TransactionEnrichmentWhereInputSchema } from '../inputTypeSchemas/TransactionEnrichmentWhereInputSchema'

export const TransactionEnrichmentUpdateManyArgsSchema: z.ZodType<Prisma.TransactionEnrichmentUpdateManyArgs> = z
    .object({
        data: z.union([TransactionEnrichmentUpdateManyMutationInputSchema, TransactionEnrichmentUncheckedUpdateManyInputSchema]),
        where: TransactionEnrichmentWhereInputSchema.optional()
    })
    .strict()

export default TransactionEnrichmentUpdateManyArgsSchema
