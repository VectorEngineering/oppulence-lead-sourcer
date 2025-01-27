import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateWithoutDealsInputSchema } from './PipelineCreateWithoutDealsInputSchema'
import { PipelineUncheckedCreateWithoutDealsInputSchema } from './PipelineUncheckedCreateWithoutDealsInputSchema'
import { PipelineCreateOrConnectWithoutDealsInputSchema } from './PipelineCreateOrConnectWithoutDealsInputSchema'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'

export const PipelineCreateNestedOneWithoutDealsInputSchema: z.ZodType<Prisma.PipelineCreateNestedOneWithoutDealsInput> = z
    .object({
        create: z
            .union([z.lazy(() => PipelineCreateWithoutDealsInputSchema), z.lazy(() => PipelineUncheckedCreateWithoutDealsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutDealsInputSchema).optional(),
        connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional()
    })
    .strict()

export default PipelineCreateNestedOneWithoutDealsInputSchema
