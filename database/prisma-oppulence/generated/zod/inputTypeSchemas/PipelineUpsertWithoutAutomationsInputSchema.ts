import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineUpdateWithoutAutomationsInputSchema } from './PipelineUpdateWithoutAutomationsInputSchema'
import { PipelineUncheckedUpdateWithoutAutomationsInputSchema } from './PipelineUncheckedUpdateWithoutAutomationsInputSchema'
import { PipelineCreateWithoutAutomationsInputSchema } from './PipelineCreateWithoutAutomationsInputSchema'
import { PipelineUncheckedCreateWithoutAutomationsInputSchema } from './PipelineUncheckedCreateWithoutAutomationsInputSchema'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'

export const PipelineUpsertWithoutAutomationsInputSchema: z.ZodType<Prisma.PipelineUpsertWithoutAutomationsInput> = z
    .object({
        update: z.union([
            z.lazy(() => PipelineUpdateWithoutAutomationsInputSchema),
            z.lazy(() => PipelineUncheckedUpdateWithoutAutomationsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PipelineCreateWithoutAutomationsInputSchema),
            z.lazy(() => PipelineUncheckedCreateWithoutAutomationsInputSchema)
        ]),
        where: z.lazy(() => PipelineWhereInputSchema).optional()
    })
    .strict()

export default PipelineUpsertWithoutAutomationsInputSchema
