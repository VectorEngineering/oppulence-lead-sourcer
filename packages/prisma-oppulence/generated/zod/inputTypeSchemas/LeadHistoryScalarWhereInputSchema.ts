import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadHistoryScalarWhereInputSchema: z.ZodType<Prisma.LeadHistoryScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LeadHistoryScalarWhereInputSchema), z.lazy(() => LeadHistoryScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LeadHistoryScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LeadHistoryScalarWhereInputSchema), z.lazy(() => LeadHistoryScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        action: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        changes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        metadata: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        changeType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        source: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ipAddress: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        userAgent: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default LeadHistoryScalarWhereInputSchema
