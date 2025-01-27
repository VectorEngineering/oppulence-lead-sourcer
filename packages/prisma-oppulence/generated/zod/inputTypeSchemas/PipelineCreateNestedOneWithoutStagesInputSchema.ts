import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateWithoutStagesInputSchema } from './PipelineCreateWithoutStagesInputSchema'
import { PipelineUncheckedCreateWithoutStagesInputSchema } from './PipelineUncheckedCreateWithoutStagesInputSchema'
import { PipelineCreateOrConnectWithoutStagesInputSchema } from './PipelineCreateOrConnectWithoutStagesInputSchema'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'

export const PipelineCreateNestedOneWithoutStagesInputSchema: z.ZodType<Prisma.PipelineCreateNestedOneWithoutStagesInput> = z
    .object({
        create: z
            .union([z.lazy(() => PipelineCreateWithoutStagesInputSchema), z.lazy(() => PipelineUncheckedCreateWithoutStagesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutStagesInputSchema).optional(),
        connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional()
    })
    .strict()

export default PipelineCreateNestedOneWithoutStagesInputSchema
