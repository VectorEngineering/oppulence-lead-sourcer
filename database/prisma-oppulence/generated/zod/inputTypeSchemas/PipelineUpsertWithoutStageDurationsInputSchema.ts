import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineUpdateWithoutStageDurationsInputSchema } from './PipelineUpdateWithoutStageDurationsInputSchema'
import { PipelineUncheckedUpdateWithoutStageDurationsInputSchema } from './PipelineUncheckedUpdateWithoutStageDurationsInputSchema'
import { PipelineCreateWithoutStageDurationsInputSchema } from './PipelineCreateWithoutStageDurationsInputSchema'
import { PipelineUncheckedCreateWithoutStageDurationsInputSchema } from './PipelineUncheckedCreateWithoutStageDurationsInputSchema'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'

export const PipelineUpsertWithoutStageDurationsInputSchema: z.ZodType<Prisma.PipelineUpsertWithoutStageDurationsInput> = z
    .object({
        update: z.union([
            z.lazy(() => PipelineUpdateWithoutStageDurationsInputSchema),
            z.lazy(() => PipelineUncheckedUpdateWithoutStageDurationsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PipelineCreateWithoutStageDurationsInputSchema),
            z.lazy(() => PipelineUncheckedCreateWithoutStageDurationsInputSchema)
        ]),
        where: z.lazy(() => PipelineWhereInputSchema).optional()
    })
    .strict()

export default PipelineUpsertWithoutStageDurationsInputSchema
