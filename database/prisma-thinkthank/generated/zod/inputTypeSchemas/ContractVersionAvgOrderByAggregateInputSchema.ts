import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ContractVersionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ContractVersionAvgOrderByAggregateInput> = z
    .object({
        versionNumber: z.lazy(() => SortOrderSchema).optional(),
        fileSize: z.lazy(() => SortOrderSchema).optional(),
        viewCount: z.lazy(() => SortOrderSchema).optional(),
        downloadCount: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ContractVersionAvgOrderByAggregateInputSchema
