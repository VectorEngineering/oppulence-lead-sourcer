import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DefaultDomainsMinOrderByAggregateInputSchema: z.ZodType<Prisma.DefaultDomainsMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        oppulence: z.lazy(() => SortOrderSchema).optional(),
        solomonai: z.lazy(() => SortOrderSchema).optional(),
        thinkthank: z.lazy(() => SortOrderSchema).optional(),
        dublink: z.lazy(() => SortOrderSchema).optional(),
        dubsh: z.lazy(() => SortOrderSchema).optional(),
        chatgpt: z.lazy(() => SortOrderSchema).optional(),
        sptifi: z.lazy(() => SortOrderSchema).optional(),
        gitnew: z.lazy(() => SortOrderSchema).optional(),
        callink: z.lazy(() => SortOrderSchema).optional(),
        amznid: z.lazy(() => SortOrderSchema).optional(),
        ggllink: z.lazy(() => SortOrderSchema).optional(),
        figpage: z.lazy(() => SortOrderSchema).optional(),
        loooooooong: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DefaultDomainsMinOrderByAggregateInputSchema
