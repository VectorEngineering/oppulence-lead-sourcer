import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionEnrichmentWhereUniqueInputSchema } from './TransactionEnrichmentWhereUniqueInputSchema'
import { TransactionEnrichmentUpdateWithoutProjectInputSchema } from './TransactionEnrichmentUpdateWithoutProjectInputSchema'
import { TransactionEnrichmentUncheckedUpdateWithoutProjectInputSchema } from './TransactionEnrichmentUncheckedUpdateWithoutProjectInputSchema'

export const TransactionEnrichmentUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TransactionEnrichmentUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => TransactionEnrichmentUpdateWithoutProjectInputSchema),
                z.lazy(() => TransactionEnrichmentUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default TransactionEnrichmentUpdateWithWhereUniqueWithoutProjectInputSchema
