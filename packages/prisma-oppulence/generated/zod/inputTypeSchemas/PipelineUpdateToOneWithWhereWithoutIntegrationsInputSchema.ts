import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'
import { PipelineUpdateWithoutIntegrationsInputSchema } from './PipelineUpdateWithoutIntegrationsInputSchema'
import { PipelineUncheckedUpdateWithoutIntegrationsInputSchema } from './PipelineUncheckedUpdateWithoutIntegrationsInputSchema'

export const PipelineUpdateToOneWithWhereWithoutIntegrationsInputSchema: z.ZodType<Prisma.PipelineUpdateToOneWithWhereWithoutIntegrationsInput> =
    z
        .object({
            where: z.lazy(() => PipelineWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => PipelineUpdateWithoutIntegrationsInputSchema),
                z.lazy(() => PipelineUncheckedUpdateWithoutIntegrationsInputSchema)
            ])
        })
        .strict()

export default PipelineUpdateToOneWithWhereWithoutIntegrationsInputSchema
