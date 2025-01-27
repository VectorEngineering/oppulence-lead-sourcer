import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { ReportRelationFilterSchema } from './ReportRelationFilterSchema'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'

export const ReportColumnWhereInputSchema: z.ZodType<Prisma.ReportColumnWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ReportColumnWhereInputSchema), z.lazy(() => ReportColumnWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ReportColumnWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ReportColumnWhereInputSchema), z.lazy(() => ReportColumnWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        label: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        width: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        position: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        isVisible: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        format: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        report: z.union([z.lazy(() => ReportRelationFilterSchema), z.lazy(() => ReportWhereInputSchema)]).optional()
    })
    .strict()

export default ReportColumnWhereInputSchema
