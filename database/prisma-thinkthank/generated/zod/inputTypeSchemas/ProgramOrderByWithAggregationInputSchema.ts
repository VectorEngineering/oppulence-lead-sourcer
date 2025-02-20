import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ProgramCountOrderByAggregateInputSchema } from './ProgramCountOrderByAggregateInputSchema'
import { ProgramAvgOrderByAggregateInputSchema } from './ProgramAvgOrderByAggregateInputSchema'
import { ProgramMaxOrderByAggregateInputSchema } from './ProgramMaxOrderByAggregateInputSchema'
import { ProgramMinOrderByAggregateInputSchema } from './ProgramMinOrderByAggregateInputSchema'
import { ProgramSumOrderByAggregateInputSchema } from './ProgramSumOrderByAggregateInputSchema'

export const ProgramOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProgramOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        workspaceId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        logo: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        wordmark: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        brandColor: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        domain: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        url: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        cookieLength: z.lazy(() => SortOrderSchema).optional(),
        commissionAmount: z.lazy(() => SortOrderSchema).optional(),
        commissionType: z.lazy(() => SortOrderSchema).optional(),
        commissionDuration: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        commissionInterval: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        landerData: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => ProgramCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => ProgramAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ProgramMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ProgramMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => ProgramSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ProgramOrderByWithAggregationInputSchema
