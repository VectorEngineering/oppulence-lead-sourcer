import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PipelineTypeSchema } from './PipelineTypeSchema'
import { EnumPipelineTypeFieldUpdateOperationsInputSchema } from './EnumPipelineTypeFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { ProjectUpdateOneRequiredWithoutPipelineNestedInputSchema } from './ProjectUpdateOneRequiredWithoutPipelineNestedInputSchema'
import { PipelineStageUpdateManyWithoutPipelineNestedInputSchema } from './PipelineStageUpdateManyWithoutPipelineNestedInputSchema'
import { DealUpdateManyWithoutPipelineNestedInputSchema } from './DealUpdateManyWithoutPipelineNestedInputSchema'
import { PipelineKpiUpdateManyWithoutPipelineNestedInputSchema } from './PipelineKpiUpdateManyWithoutPipelineNestedInputSchema'
import { PipelineAutomationUpdateManyWithoutPipelineNestedInputSchema } from './PipelineAutomationUpdateManyWithoutPipelineNestedInputSchema'
import { PipelineIntegrationUpdateManyWithoutPipelineNestedInputSchema } from './PipelineIntegrationUpdateManyWithoutPipelineNestedInputSchema'
import { PipelineAccessRuleUpdateManyWithoutPipelineNestedInputSchema } from './PipelineAccessRuleUpdateManyWithoutPipelineNestedInputSchema'

export const PipelineUpdateWithoutStageDurationsInputSchema: z.ZodType<Prisma.PipelineUpdateWithoutStageDurationsInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        slug: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        description: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        type: z.union([z.lazy(() => PipelineTypeSchema), z.lazy(() => EnumPipelineTypeFieldUpdateOperationsInputSchema)]).optional(),
        isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        icon: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        color: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        currency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        defaultStageId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        pipelineFocus: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        pipelineSegment: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        pipelineCategory: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        pipelineGoal: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        typicalSalesCycle: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        averageDealSize: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        averageCloseRate: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        minimumDealSize: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        maximumDealSize: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        targetMarket: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        salesMethodology: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        qualificationCriteria: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        forecastingMethod: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        confidenceScore: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        revenueTarget: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        dealCountTarget: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        complianceLevel: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        securityTier: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        dataRetention: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        visibilityLevel: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
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
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        archivedAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        project: z.lazy(() => ProjectUpdateOneRequiredWithoutPipelineNestedInputSchema).optional(),
        stages: z.lazy(() => PipelineStageUpdateManyWithoutPipelineNestedInputSchema).optional(),
        deals: z.lazy(() => DealUpdateManyWithoutPipelineNestedInputSchema).optional(),
        kpis: z.lazy(() => PipelineKpiUpdateManyWithoutPipelineNestedInputSchema).optional(),
        automations: z.lazy(() => PipelineAutomationUpdateManyWithoutPipelineNestedInputSchema).optional(),
        integrations: z.lazy(() => PipelineIntegrationUpdateManyWithoutPipelineNestedInputSchema).optional(),
        accessRules: z.lazy(() => PipelineAccessRuleUpdateManyWithoutPipelineNestedInputSchema).optional()
    })
    .strict()

export default PipelineUpdateWithoutStageDurationsInputSchema
