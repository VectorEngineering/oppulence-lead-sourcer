import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { EnumDealStatusWithAggregatesFilterSchema } from './EnumDealStatusWithAggregatesFilterSchema'
import { DealStatusSchema } from './DealStatusSchema'
import { EnumDealPriorityWithAggregatesFilterSchema } from './EnumDealPriorityWithAggregatesFilterSchema'
import { DealPrioritySchema } from './DealPrioritySchema'
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema'
import { EnumMarketingChannelNullableWithAggregatesFilterSchema } from './EnumMarketingChannelNullableWithAggregatesFilterSchema'
import { MarketingChannelSchema } from './MarketingChannelSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const DealScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DealScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([z.lazy(() => DealScalarWhereWithAggregatesInputSchema), z.lazy(() => DealScalarWhereWithAggregatesInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => DealScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => DealScalarWhereWithAggregatesInputSchema), z.lazy(() => DealScalarWhereWithAggregatesInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        pipelineId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        stageId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        leadId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => EnumDealStatusWithAggregatesFilterSchema), z.lazy(() => DealStatusSchema)]).optional(),
        priority: z.union([z.lazy(() => EnumDealPriorityWithAggregatesFilterSchema), z.lazy(() => DealPrioritySchema)]).optional(),
        value: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
        currency: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        probability: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        expectedRevenue: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        dealCategory: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        dealFocus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        synergyPotential: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        synergyDescription: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceCheck: z
            .union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
            .optional()
            .nullable(),
        complianceNotes: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        estimatedProfitMargin: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        discountReason: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        closingStrategy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        marketingChannel: z
            .union([z.lazy(() => EnumMarketingChannelNullableWithAggregatesFilterSchema), z.lazy(() => MarketingChannelSchema)])
            .optional()
            .nullable(),
        leadRating: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        startDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        closeDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        actualCloseDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        progress: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        reason: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        notes: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        assignedToId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        archivedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        updatedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default DealScalarWhereWithAggregatesInputSchema
