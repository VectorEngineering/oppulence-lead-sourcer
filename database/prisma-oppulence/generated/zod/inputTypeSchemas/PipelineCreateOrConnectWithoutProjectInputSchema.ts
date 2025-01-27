import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'
import { PipelineCreateWithoutProjectInputSchema } from './PipelineCreateWithoutProjectInputSchema'
import { PipelineUncheckedCreateWithoutProjectInputSchema } from './PipelineUncheckedCreateWithoutProjectInputSchema'

export const PipelineCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PipelineCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => PipelineWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => PipelineCreateWithoutProjectInputSchema),
            z.lazy(() => PipelineUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default PipelineCreateOrConnectWithoutProjectInputSchema
