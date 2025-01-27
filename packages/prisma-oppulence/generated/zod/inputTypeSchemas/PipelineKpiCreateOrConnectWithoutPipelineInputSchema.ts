import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineKpiWhereUniqueInputSchema } from './PipelineKpiWhereUniqueInputSchema'
import { PipelineKpiCreateWithoutPipelineInputSchema } from './PipelineKpiCreateWithoutPipelineInputSchema'
import { PipelineKpiUncheckedCreateWithoutPipelineInputSchema } from './PipelineKpiUncheckedCreateWithoutPipelineInputSchema'

export const PipelineKpiCreateOrConnectWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineKpiCreateOrConnectWithoutPipelineInput> = z
    .object({
        where: z.lazy(() => PipelineKpiWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => PipelineKpiCreateWithoutPipelineInputSchema),
            z.lazy(() => PipelineKpiUncheckedCreateWithoutPipelineInputSchema)
        ])
    })
    .strict()

export default PipelineKpiCreateOrConnectWithoutPipelineInputSchema
