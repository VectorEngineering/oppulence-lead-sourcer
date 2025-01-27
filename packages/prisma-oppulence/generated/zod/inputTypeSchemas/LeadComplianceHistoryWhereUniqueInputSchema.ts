import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceHistoryWhereInputSchema } from './LeadComplianceHistoryWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadComplianceAuditRelationFilterSchema } from './LeadComplianceAuditRelationFilterSchema'
import { LeadComplianceAuditWhereInputSchema } from './LeadComplianceAuditWhereInputSchema'

export const LeadComplianceHistoryWhereUniqueInputSchema: z.ZodType<Prisma.LeadComplianceHistoryWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([
                        z.lazy(() => LeadComplianceHistoryWhereInputSchema),
                        z.lazy(() => LeadComplianceHistoryWhereInputSchema).array()
                    ])
                    .optional(),
                OR: z
                    .lazy(() => LeadComplianceHistoryWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => LeadComplianceHistoryWhereInputSchema),
                        z.lazy(() => LeadComplianceHistoryWhereInputSchema).array()
                    ])
                    .optional(),
                complianceAuditId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                action: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                notes: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                performedBy: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                complianceAudit: z
                    .union([z.lazy(() => LeadComplianceAuditRelationFilterSchema), z.lazy(() => LeadComplianceAuditWhereInputSchema)])
                    .optional()
            })
            .strict()
    )

export default LeadComplianceHistoryWhereUniqueInputSchema
