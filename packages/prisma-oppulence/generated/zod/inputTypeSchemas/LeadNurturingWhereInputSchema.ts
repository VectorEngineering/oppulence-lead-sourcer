import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumNurtureStatusFilterSchema } from './EnumNurtureStatusFilterSchema'
import { NurtureStatusSchema } from './NurtureStatusSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadNurturingWhereInputSchema: z.ZodType<Prisma.LeadNurturingWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LeadNurturingWhereInputSchema), z.lazy(() => LeadNurturingWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LeadNurturingWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LeadNurturingWhereInputSchema), z.lazy(() => LeadNurturingWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        program: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        stage: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        status: z.union([z.lazy(() => EnumNurtureStatusFilterSchema), z.lazy(() => NurtureStatusSchema)]).optional(),
        contentViewed: z.lazy(() => JsonNullableFilterSchema).optional(),
        emailsOpened: z.lazy(() => JsonNullableFilterSchema).optional(),
        websiteVisits: z.lazy(() => JsonNullableFilterSchema).optional(),
        engagementScore: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        responseRate: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        lastEngagement: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        currentStep: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        completedSteps: z.lazy(() => JsonNullableFilterSchema).optional(),
        nextActions: z.lazy(() => JsonNullableFilterSchema).optional(),
        automationFlows: z.lazy(() => JsonNullableFilterSchema).optional(),
        triggers: z.lazy(() => JsonNullableFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional()
    })
    .strict()

export default LeadNurturingWhereInputSchema
