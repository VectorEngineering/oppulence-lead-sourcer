import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadComplianceHistoryScalarWhereInputSchema: z.ZodType<Prisma.LeadComplianceHistoryScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadComplianceHistoryScalarWhereInputSchema),
                z.lazy(() => LeadComplianceHistoryScalarWhereInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadComplianceHistoryScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadComplianceHistoryScalarWhereInputSchema),
                z.lazy(() => LeadComplianceHistoryScalarWhereInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        complianceAuditId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        action: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        notes: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        performedBy: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadComplianceHistoryScalarWhereInputSchema
