import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'

export const ReportRecipientScalarWhereInputSchema: z.ZodType<Prisma.ReportRecipientScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => ReportRecipientScalarWhereInputSchema), z.lazy(() => ReportRecipientScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => ReportRecipientScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => ReportRecipientScalarWhereInputSchema), z.lazy(() => ReportRecipientScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        isActive: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional()
    })
    .strict()

export default ReportRecipientScalarWhereInputSchema
