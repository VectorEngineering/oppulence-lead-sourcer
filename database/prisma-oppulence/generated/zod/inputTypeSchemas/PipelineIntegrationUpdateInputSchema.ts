import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { IntegrationTypeSchema } from './IntegrationTypeSchema'
import { EnumIntegrationTypeFieldUpdateOperationsInputSchema } from './EnumIntegrationTypeFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { PipelineUpdateOneRequiredWithoutIntegrationsNestedInputSchema } from './PipelineUpdateOneRequiredWithoutIntegrationsNestedInputSchema'

export const PipelineIntegrationUpdateInputSchema: z.ZodType<Prisma.PipelineIntegrationUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        type: z.union([z.lazy(() => IntegrationTypeSchema), z.lazy(() => EnumIntegrationTypeFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        config: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        lastSyncedAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        pipeline: z.lazy(() => PipelineUpdateOneRequiredWithoutIntegrationsNestedInputSchema).optional()
    })
    .strict()

export default PipelineIntegrationUpdateInputSchema
