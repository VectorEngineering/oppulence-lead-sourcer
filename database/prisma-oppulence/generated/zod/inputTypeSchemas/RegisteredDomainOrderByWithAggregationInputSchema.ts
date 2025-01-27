import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { RegisteredDomainCountOrderByAggregateInputSchema } from './RegisteredDomainCountOrderByAggregateInputSchema'
import { RegisteredDomainMaxOrderByAggregateInputSchema } from './RegisteredDomainMaxOrderByAggregateInputSchema'
import { RegisteredDomainMinOrderByAggregateInputSchema } from './RegisteredDomainMinOrderByAggregateInputSchema'

export const RegisteredDomainOrderByWithAggregationInputSchema: z.ZodType<Prisma.RegisteredDomainOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        domainId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => RegisteredDomainCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => RegisteredDomainMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => RegisteredDomainMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default RegisteredDomainOrderByWithAggregationInputSchema
