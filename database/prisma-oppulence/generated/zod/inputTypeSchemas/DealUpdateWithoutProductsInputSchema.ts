import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DealStatusSchema } from './DealStatusSchema'
import { EnumDealStatusFieldUpdateOperationsInputSchema } from './EnumDealStatusFieldUpdateOperationsInputSchema'
import { DealPrioritySchema } from './DealPrioritySchema'
import { EnumDealPriorityFieldUpdateOperationsInputSchema } from './EnumDealPriorityFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema'
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema'
import { MarketingChannelSchema } from './MarketingChannelSchema'
import { NullableEnumMarketingChannelFieldUpdateOperationsInputSchema } from './NullableEnumMarketingChannelFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { UserUpdateOneWithoutDealNestedInputSchema } from './UserUpdateOneWithoutDealNestedInputSchema'
import { ProjectUpdateOneRequiredWithoutDealNestedInputSchema } from './ProjectUpdateOneRequiredWithoutDealNestedInputSchema'
import { PipelineUpdateOneRequiredWithoutDealsNestedInputSchema } from './PipelineUpdateOneRequiredWithoutDealsNestedInputSchema'
import { PipelineStageUpdateOneRequiredWithoutDealsNestedInputSchema } from './PipelineStageUpdateOneRequiredWithoutDealsNestedInputSchema'
import { LeadUpdateOneWithoutDealsNestedInputSchema } from './LeadUpdateOneWithoutDealsNestedInputSchema'
import { DealActivityUpdateManyWithoutDealNestedInputSchema } from './DealActivityUpdateManyWithoutDealNestedInputSchema'
import { DealCompetitorUpdateManyWithoutDealNestedInputSchema } from './DealCompetitorUpdateManyWithoutDealNestedInputSchema'
import { DocumentUpdateManyWithoutDealNestedInputSchema } from './DocumentUpdateManyWithoutDealNestedInputSchema'
import { DealTaskUpdateManyWithoutDealNestedInputSchema } from './DealTaskUpdateManyWithoutDealNestedInputSchema'
import { DealHistoryUpdateManyWithoutDealNestedInputSchema } from './DealHistoryUpdateManyWithoutDealNestedInputSchema'

export const DealUpdateWithoutProductsInputSchema: z.ZodType<Prisma.DealUpdateWithoutProductsInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        description: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => DealStatusSchema), z.lazy(() => EnumDealStatusFieldUpdateOperationsInputSchema)]).optional(),
        priority: z.union([z.lazy(() => DealPrioritySchema), z.lazy(() => EnumDealPriorityFieldUpdateOperationsInputSchema)]).optional(),
        value: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        currency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        probability: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        expectedRevenue: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        dealCategory: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        dealFocus: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        synergyPotential: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        synergyDescription: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        complianceCheck: z
            .union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        complianceNotes: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        estimatedProfitMargin: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        discountReason: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        closingStrategy: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        marketingChannel: z
            .union([z.lazy(() => MarketingChannelSchema), z.lazy(() => NullableEnumMarketingChannelFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        leadRating: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        startDate: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        closeDate: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        actualCloseDate: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        progress: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        reason: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        notes: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        archivedAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdBy: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        updatedBy: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        assignedTo: z.lazy(() => UserUpdateOneWithoutDealNestedInputSchema).optional(),
        project: z.lazy(() => ProjectUpdateOneRequiredWithoutDealNestedInputSchema).optional(),
        pipeline: z.lazy(() => PipelineUpdateOneRequiredWithoutDealsNestedInputSchema).optional(),
        stage: z.lazy(() => PipelineStageUpdateOneRequiredWithoutDealsNestedInputSchema).optional(),
        lead: z.lazy(() => LeadUpdateOneWithoutDealsNestedInputSchema).optional(),
        activities: z.lazy(() => DealActivityUpdateManyWithoutDealNestedInputSchema).optional(),
        competitors: z.lazy(() => DealCompetitorUpdateManyWithoutDealNestedInputSchema).optional(),
        attachments: z.lazy(() => DocumentUpdateManyWithoutDealNestedInputSchema).optional(),
        tasks: z.lazy(() => DealTaskUpdateManyWithoutDealNestedInputSchema).optional(),
        history: z.lazy(() => DealHistoryUpdateManyWithoutDealNestedInputSchema).optional()
    })
    .strict()

export default DealUpdateWithoutProductsInputSchema
