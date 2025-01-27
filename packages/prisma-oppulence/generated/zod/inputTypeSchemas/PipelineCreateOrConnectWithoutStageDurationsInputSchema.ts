import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'
import { PipelineCreateWithoutStageDurationsInputSchema } from './PipelineCreateWithoutStageDurationsInputSchema'
import { PipelineUncheckedCreateWithoutStageDurationsInputSchema } from './PipelineUncheckedCreateWithoutStageDurationsInputSchema'

export const PipelineCreateOrConnectWithoutStageDurationsInputSchema: z.ZodType<Prisma.PipelineCreateOrConnectWithoutStageDurationsInput> =
    z
        .object({
            where: z.lazy(() => PipelineWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => PipelineCreateWithoutStageDurationsInputSchema),
                z.lazy(() => PipelineUncheckedCreateWithoutStageDurationsInputSchema)
            ])
        })
        .strict()

export default PipelineCreateOrConnectWithoutStageDurationsInputSchema
