import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadProductFitScalarWhereInputSchema: z.ZodType<Prisma.LeadProductFitScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadProductFitScalarWhereInputSchema), z.lazy(() => LeadProductFitScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadProductFitScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadProductFitScalarWhereInputSchema), z.lazy(() => LeadProductFitScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        technicalFit: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        businessFit: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        culturalFit: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        budgetFit: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        overallFit: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        strengthsWeaknesses: z.lazy(() => JsonFilterSchema).optional(),
        customizationNeeds: z.lazy(() => JsonFilterSchema).optional(),
        implementationComplexity: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        requiredFeatures: z.lazy(() => JsonFilterSchema).optional(),
        optionalFeatures: z.lazy(() => JsonFilterSchema).optional(),
        dealBreakers: z.lazy(() => JsonFilterSchema).optional(),
        integrationComplexity: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        integrationRisks: z.lazy(() => JsonFilterSchema).optional(),
        integrationCosts: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        implementationTimeline: z.lazy(() => JsonFilterSchema).optional(),
        trainingNeeds: z.lazy(() => JsonFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadProductFitScalarWhereInputSchema
