import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LeadScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadScalarWhereWithAggregatesInputSchema), z.lazy(() => LeadScalarWhereWithAggregatesInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadScalarWhereWithAggregatesInputSchema), z.lazy(() => LeadScalarWhereWithAggregatesInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        endpointId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        data: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadScalarWhereWithAggregatesInputSchema
