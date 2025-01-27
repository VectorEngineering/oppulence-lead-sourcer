import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'
import { PipelineUpdateWithoutDealsInputSchema } from './PipelineUpdateWithoutDealsInputSchema'
import { PipelineUncheckedUpdateWithoutDealsInputSchema } from './PipelineUncheckedUpdateWithoutDealsInputSchema'

export const PipelineUpdateToOneWithWhereWithoutDealsInputSchema: z.ZodType<Prisma.PipelineUpdateToOneWithWhereWithoutDealsInput> = z
    .object({
        where: z.lazy(() => PipelineWhereInputSchema).optional(),
        data: z.union([z.lazy(() => PipelineUpdateWithoutDealsInputSchema), z.lazy(() => PipelineUncheckedUpdateWithoutDealsInputSchema)])
    })
    .strict()

export default PipelineUpdateToOneWithWhereWithoutDealsInputSchema
