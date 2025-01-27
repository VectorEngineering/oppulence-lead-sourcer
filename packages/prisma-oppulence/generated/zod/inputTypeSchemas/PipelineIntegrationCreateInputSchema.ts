import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationTypeSchema } from './IntegrationTypeSchema'
import { PipelineCreateNestedOneWithoutIntegrationsInputSchema } from './PipelineCreateNestedOneWithoutIntegrationsInputSchema'

export const PipelineIntegrationCreateInputSchema: z.ZodType<Prisma.PipelineIntegrationCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        type: z.lazy(() => IntegrationTypeSchema),
        name: z.string(),
        provider: z.string(),
        config: z.string(),
        isActive: z.boolean().optional(),
        lastSyncedAt: z.coerce.date().optional().nullable(),
        pipeline: z.lazy(() => PipelineCreateNestedOneWithoutIntegrationsInputSchema)
    })
    .strict()

export default PipelineIntegrationCreateInputSchema
