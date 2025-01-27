import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'
import { PipelineUpdateWithoutStagesInputSchema } from './PipelineUpdateWithoutStagesInputSchema'
import { PipelineUncheckedUpdateWithoutStagesInputSchema } from './PipelineUncheckedUpdateWithoutStagesInputSchema'

export const PipelineUpdateToOneWithWhereWithoutStagesInputSchema: z.ZodType<Prisma.PipelineUpdateToOneWithWhereWithoutStagesInput> = z
    .object({
        where: z.lazy(() => PipelineWhereInputSchema).optional(),
        data: z.union([z.lazy(() => PipelineUpdateWithoutStagesInputSchema), z.lazy(() => PipelineUncheckedUpdateWithoutStagesInputSchema)])
    })
    .strict()

export default PipelineUpdateToOneWithWhereWithoutStagesInputSchema
