import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateWithoutProjectInputSchema } from './PipelineCreateWithoutProjectInputSchema'
import { PipelineUncheckedCreateWithoutProjectInputSchema } from './PipelineUncheckedCreateWithoutProjectInputSchema'
import { PipelineCreateOrConnectWithoutProjectInputSchema } from './PipelineCreateOrConnectWithoutProjectInputSchema'
import { PipelineCreateManyProjectInputEnvelopeSchema } from './PipelineCreateManyProjectInputEnvelopeSchema'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'

export const PipelineUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PipelineUncheckedCreateNestedManyWithoutProjectInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineCreateWithoutProjectInputSchema),
                    z.lazy(() => PipelineCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => PipelineUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => PipelineUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => PipelineCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => PipelineCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => PipelineCreateManyProjectInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => PipelineWhereUniqueInputSchema), z.lazy(() => PipelineWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default PipelineUncheckedCreateNestedManyWithoutProjectInputSchema
