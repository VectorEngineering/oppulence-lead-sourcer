import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateWithoutStageDurationsInputSchema } from './PipelineCreateWithoutStageDurationsInputSchema'
import { PipelineUncheckedCreateWithoutStageDurationsInputSchema } from './PipelineUncheckedCreateWithoutStageDurationsInputSchema'
import { PipelineCreateOrConnectWithoutStageDurationsInputSchema } from './PipelineCreateOrConnectWithoutStageDurationsInputSchema'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'

export const PipelineCreateNestedOneWithoutStageDurationsInputSchema: z.ZodType<Prisma.PipelineCreateNestedOneWithoutStageDurationsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineCreateWithoutStageDurationsInputSchema),
                    z.lazy(() => PipelineUncheckedCreateWithoutStageDurationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutStageDurationsInputSchema).optional(),
            connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional()
        })
        .strict()

export default PipelineCreateNestedOneWithoutStageDurationsInputSchema
