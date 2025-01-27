import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'
import { PipelineUpdateWithoutProjectInputSchema } from './PipelineUpdateWithoutProjectInputSchema'
import { PipelineUncheckedUpdateWithoutProjectInputSchema } from './PipelineUncheckedUpdateWithoutProjectInputSchema'
import { PipelineCreateWithoutProjectInputSchema } from './PipelineCreateWithoutProjectInputSchema'
import { PipelineUncheckedCreateWithoutProjectInputSchema } from './PipelineUncheckedCreateWithoutProjectInputSchema'

export const PipelineUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PipelineUpsertWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => PipelineWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => PipelineUpdateWithoutProjectInputSchema),
            z.lazy(() => PipelineUncheckedUpdateWithoutProjectInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PipelineCreateWithoutProjectInputSchema),
            z.lazy(() => PipelineUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default PipelineUpsertWithWhereUniqueWithoutProjectInputSchema
