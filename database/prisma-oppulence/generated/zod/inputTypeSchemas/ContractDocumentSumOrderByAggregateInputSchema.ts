import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ContractDocumentSumOrderByAggregateInputSchema: z.ZodType<Prisma.ContractDocumentSumOrderByAggregateInput> = z
    .object({
        version: z.lazy(() => SortOrderSchema).optional(),
        pageCount: z.lazy(() => SortOrderSchema).optional(),
        wordCount: z.lazy(() => SortOrderSchema).optional(),
        fileSize: z.lazy(() => SortOrderSchema).optional(),
        retentionPeriod: z.lazy(() => SortOrderSchema).optional(),
        viewCount: z.lazy(() => SortOrderSchema).optional(),
        downloadCount: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ContractDocumentSumOrderByAggregateInputSchema
