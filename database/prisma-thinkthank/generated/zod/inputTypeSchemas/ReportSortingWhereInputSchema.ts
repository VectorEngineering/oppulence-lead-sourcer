import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumSortDirectionFilterSchema } from './EnumSortDirectionFilterSchema'
import { SortDirectionSchema } from './SortDirectionSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { ReportRelationFilterSchema } from './ReportRelationFilterSchema'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'

export const ReportSortingWhereInputSchema: z.ZodType<Prisma.ReportSortingWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ReportSortingWhereInputSchema), z.lazy(() => ReportSortingWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ReportSortingWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ReportSortingWhereInputSchema), z.lazy(() => ReportSortingWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        direction: z.union([z.lazy(() => EnumSortDirectionFilterSchema), z.lazy(() => SortDirectionSchema)]).optional(),
        position: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        report: z.union([z.lazy(() => ReportRelationFilterSchema), z.lazy(() => ReportWhereInputSchema)]).optional()
    })
    .strict()

export default ReportSortingWhereInputSchema
