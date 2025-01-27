import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'
import { PipelineCreateWithoutStagesInputSchema } from './PipelineCreateWithoutStagesInputSchema'
import { PipelineUncheckedCreateWithoutStagesInputSchema } from './PipelineUncheckedCreateWithoutStagesInputSchema'

export const PipelineCreateOrConnectWithoutStagesInputSchema: z.ZodType<Prisma.PipelineCreateOrConnectWithoutStagesInput> = z
    .object({
        where: z.lazy(() => PipelineWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => PipelineCreateWithoutStagesInputSchema),
            z.lazy(() => PipelineUncheckedCreateWithoutStagesInputSchema)
        ])
    })
    .strict()

export default PipelineCreateOrConnectWithoutStagesInputSchema
