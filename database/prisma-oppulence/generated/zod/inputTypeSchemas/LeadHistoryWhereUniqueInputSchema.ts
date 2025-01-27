import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadHistoryWhereInputSchema } from './LeadHistoryWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadHistoryWhereUniqueInputSchema: z.ZodType<Prisma.LeadHistoryWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z.union([z.lazy(() => LeadHistoryWhereInputSchema), z.lazy(() => LeadHistoryWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => LeadHistoryWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => LeadHistoryWhereInputSchema), z.lazy(() => LeadHistoryWhereInputSchema).array()]).optional(),
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
                    .nullable(),
                lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional()
            })
            .strict()
    )

export default LeadHistoryWhereUniqueInputSchema
