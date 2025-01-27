import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'
import { PipelineUpdateWithoutStageDurationsInputSchema } from './PipelineUpdateWithoutStageDurationsInputSchema'
import { PipelineUncheckedUpdateWithoutStageDurationsInputSchema } from './PipelineUncheckedUpdateWithoutStageDurationsInputSchema'

export const PipelineUpdateToOneWithWhereWithoutStageDurationsInputSchema: z.ZodType<Prisma.PipelineUpdateToOneWithWhereWithoutStageDurationsInput> =
    z
        .object({
            where: z.lazy(() => PipelineWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => PipelineUpdateWithoutStageDurationsInputSchema),
                z.lazy(() => PipelineUncheckedUpdateWithoutStageDurationsInputSchema)
            ])
        })
        .strict()

export default PipelineUpdateToOneWithWhereWithoutStageDurationsInputSchema
