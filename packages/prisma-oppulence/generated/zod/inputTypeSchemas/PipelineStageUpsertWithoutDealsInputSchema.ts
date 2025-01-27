import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageUpdateWithoutDealsInputSchema } from './PipelineStageUpdateWithoutDealsInputSchema'
import { PipelineStageUncheckedUpdateWithoutDealsInputSchema } from './PipelineStageUncheckedUpdateWithoutDealsInputSchema'
import { PipelineStageCreateWithoutDealsInputSchema } from './PipelineStageCreateWithoutDealsInputSchema'
import { PipelineStageUncheckedCreateWithoutDealsInputSchema } from './PipelineStageUncheckedCreateWithoutDealsInputSchema'
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema'

export const PipelineStageUpsertWithoutDealsInputSchema: z.ZodType<Prisma.PipelineStageUpsertWithoutDealsInput> = z
    .object({
        update: z.union([
            z.lazy(() => PipelineStageUpdateWithoutDealsInputSchema),
            z.lazy(() => PipelineStageUncheckedUpdateWithoutDealsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PipelineStageCreateWithoutDealsInputSchema),
            z.lazy(() => PipelineStageUncheckedCreateWithoutDealsInputSchema)
        ]),
        where: z.lazy(() => PipelineStageWhereInputSchema).optional()
    })
    .strict()

export default PipelineStageUpsertWithoutDealsInputSchema
