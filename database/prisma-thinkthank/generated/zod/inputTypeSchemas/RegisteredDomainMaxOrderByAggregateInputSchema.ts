import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const RegisteredDomainMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RegisteredDomainMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        domainId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default RegisteredDomainMaxOrderByAggregateInputSchema
