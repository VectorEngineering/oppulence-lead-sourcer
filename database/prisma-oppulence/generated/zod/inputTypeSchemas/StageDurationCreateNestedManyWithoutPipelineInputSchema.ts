import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationCreateWithoutPipelineInputSchema } from './StageDurationCreateWithoutPipelineInputSchema'
import { StageDurationUncheckedCreateWithoutPipelineInputSchema } from './StageDurationUncheckedCreateWithoutPipelineInputSchema'
import { StageDurationCreateOrConnectWithoutPipelineInputSchema } from './StageDurationCreateOrConnectWithoutPipelineInputSchema'
import { StageDurationCreateManyPipelineInputEnvelopeSchema } from './StageDurationCreateManyPipelineInputEnvelopeSchema'
import { StageDurationWhereUniqueInputSchema } from './StageDurationWhereUniqueInputSchema'

export const StageDurationCreateNestedManyWithoutPipelineInputSchema: z.ZodType<Prisma.StageDurationCreateNestedManyWithoutPipelineInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => StageDurationCreateWithoutPipelineInputSchema),
                    z.lazy(() => StageDurationCreateWithoutPipelineInputSchema).array(),
                    z.lazy(() => StageDurationUncheckedCreateWithoutPipelineInputSchema),
                    z.lazy(() => StageDurationUncheckedCreateWithoutPipelineInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => StageDurationCreateOrConnectWithoutPipelineInputSchema),
                    z.lazy(() => StageDurationCreateOrConnectWithoutPipelineInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => StageDurationCreateManyPipelineInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => StageDurationWhereUniqueInputSchema), z.lazy(() => StageDurationWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default StageDurationCreateNestedManyWithoutPipelineInputSchema
