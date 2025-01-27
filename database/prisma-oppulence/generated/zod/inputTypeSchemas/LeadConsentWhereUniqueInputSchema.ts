import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadConsentWhereInputSchema } from './LeadConsentWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadConsentWhereUniqueInputSchema: z.ZodType<Prisma.LeadConsentWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z.union([z.lazy(() => LeadConsentWhereInputSchema), z.lazy(() => LeadConsentWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => LeadConsentWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => LeadConsentWhereInputSchema), z.lazy(() => LeadConsentWhereInputSchema).array()]).optional(),
                leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                status: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                source: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                ipAddress: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                timestamp: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                expiryDate: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                document: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional()
            })
            .strict()
    )

export default LeadConsentWhereUniqueInputSchema
