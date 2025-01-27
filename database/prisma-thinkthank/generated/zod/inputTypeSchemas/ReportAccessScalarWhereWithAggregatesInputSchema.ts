import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const ReportAccessScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportAccessScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ReportAccessScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportAccessScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ReportAccessScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ReportAccessScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportAccessScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        accessType: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict()

export default ReportAccessScalarWhereWithAggregatesInputSchema
