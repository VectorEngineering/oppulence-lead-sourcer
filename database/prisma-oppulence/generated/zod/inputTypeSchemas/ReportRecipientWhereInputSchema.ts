import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { ReportRelationFilterSchema } from './ReportRelationFilterSchema'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'

export const ReportRecipientWhereInputSchema: z.ZodType<Prisma.ReportRecipientWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ReportRecipientWhereInputSchema), z.lazy(() => ReportRecipientWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ReportRecipientWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ReportRecipientWhereInputSchema), z.lazy(() => ReportRecipientWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        isActive: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        report: z.union([z.lazy(() => ReportRelationFilterSchema), z.lazy(() => ReportWhereInputSchema)]).optional()
    })
    .strict()

export default ReportRecipientWhereInputSchema
