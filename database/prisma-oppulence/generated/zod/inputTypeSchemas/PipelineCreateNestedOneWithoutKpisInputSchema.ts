import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateWithoutKpisInputSchema } from './PipelineCreateWithoutKpisInputSchema'
import { PipelineUncheckedCreateWithoutKpisInputSchema } from './PipelineUncheckedCreateWithoutKpisInputSchema'
import { PipelineCreateOrConnectWithoutKpisInputSchema } from './PipelineCreateOrConnectWithoutKpisInputSchema'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'

export const PipelineCreateNestedOneWithoutKpisInputSchema: z.ZodType<Prisma.PipelineCreateNestedOneWithoutKpisInput> = z
    .object({
        create: z
            .union([z.lazy(() => PipelineCreateWithoutKpisInputSchema), z.lazy(() => PipelineUncheckedCreateWithoutKpisInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutKpisInputSchema).optional(),
        connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional()
    })
    .strict()

export default PipelineCreateNestedOneWithoutKpisInputSchema
