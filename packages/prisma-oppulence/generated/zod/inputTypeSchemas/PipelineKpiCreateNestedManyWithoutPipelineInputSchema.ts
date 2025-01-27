import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineKpiCreateWithoutPipelineInputSchema } from './PipelineKpiCreateWithoutPipelineInputSchema'
import { PipelineKpiUncheckedCreateWithoutPipelineInputSchema } from './PipelineKpiUncheckedCreateWithoutPipelineInputSchema'
import { PipelineKpiCreateOrConnectWithoutPipelineInputSchema } from './PipelineKpiCreateOrConnectWithoutPipelineInputSchema'
import { PipelineKpiCreateManyPipelineInputEnvelopeSchema } from './PipelineKpiCreateManyPipelineInputEnvelopeSchema'
import { PipelineKpiWhereUniqueInputSchema } from './PipelineKpiWhereUniqueInputSchema'

export const PipelineKpiCreateNestedManyWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineKpiCreateNestedManyWithoutPipelineInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => PipelineKpiCreateWithoutPipelineInputSchema),
                z.lazy(() => PipelineKpiCreateWithoutPipelineInputSchema).array(),
                z.lazy(() => PipelineKpiUncheckedCreateWithoutPipelineInputSchema),
                z.lazy(() => PipelineKpiUncheckedCreateWithoutPipelineInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PipelineKpiCreateOrConnectWithoutPipelineInputSchema),
                z.lazy(() => PipelineKpiCreateOrConnectWithoutPipelineInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => PipelineKpiCreateManyPipelineInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => PipelineKpiWhereUniqueInputSchema), z.lazy(() => PipelineKpiWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default PipelineKpiCreateNestedManyWithoutPipelineInputSchema
