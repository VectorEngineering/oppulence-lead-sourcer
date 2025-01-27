import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { EnumDealStatusFilterSchema } from './EnumDealStatusFilterSchema'
import { DealStatusSchema } from './DealStatusSchema'
import { EnumDealPriorityFilterSchema } from './EnumDealPriorityFilterSchema'
import { DealPrioritySchema } from './DealPrioritySchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema'
import { EnumMarketingChannelNullableFilterSchema } from './EnumMarketingChannelNullableFilterSchema'
import { MarketingChannelSchema } from './MarketingChannelSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const DealScalarWhereInputSchema: z.ZodType<Prisma.DealScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => DealScalarWhereInputSchema), z.lazy(() => DealScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => DealScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => DealScalarWhereInputSchema), z.lazy(() => DealScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        pipelineId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        stageId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => EnumDealStatusFilterSchema), z.lazy(() => DealStatusSchema)]).optional(),
        priority: z.union([z.lazy(() => EnumDealPriorityFilterSchema), z.lazy(() => DealPrioritySchema)]).optional(),
        value: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        currency: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        probability: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        expectedRevenue: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        dealCategory: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        dealFocus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        synergyPotential: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        synergyDescription: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceCheck: z
            .union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
            .optional()
            .nullable(),
        complianceNotes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        estimatedProfitMargin: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        discountReason: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        closingStrategy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        marketingChannel: z
            .union([z.lazy(() => EnumMarketingChannelNullableFilterSchema), z.lazy(() => MarketingChannelSchema)])
            .optional()
            .nullable(),
        leadRating: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        startDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        closeDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        actualCloseDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        progress: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        reason: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        notes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        assignedToId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        archivedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        updatedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default DealScalarWhereInputSchema
