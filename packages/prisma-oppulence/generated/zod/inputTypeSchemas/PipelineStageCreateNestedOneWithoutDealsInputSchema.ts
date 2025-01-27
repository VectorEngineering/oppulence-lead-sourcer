import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageCreateWithoutDealsInputSchema } from './PipelineStageCreateWithoutDealsInputSchema'
import { PipelineStageUncheckedCreateWithoutDealsInputSchema } from './PipelineStageUncheckedCreateWithoutDealsInputSchema'
import { PipelineStageCreateOrConnectWithoutDealsInputSchema } from './PipelineStageCreateOrConnectWithoutDealsInputSchema'
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema'

export const PipelineStageCreateNestedOneWithoutDealsInputSchema: z.ZodType<Prisma.PipelineStageCreateNestedOneWithoutDealsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => PipelineStageCreateWithoutDealsInputSchema),
                z.lazy(() => PipelineStageUncheckedCreateWithoutDealsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => PipelineStageCreateOrConnectWithoutDealsInputSchema).optional(),
        connect: z.lazy(() => PipelineStageWhereUniqueInputSchema).optional()
    })
    .strict()

export default PipelineStageCreateNestedOneWithoutDealsInputSchema
