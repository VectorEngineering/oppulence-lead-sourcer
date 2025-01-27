import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageUpdateWithoutRequiredFieldsInputSchema } from './PipelineStageUpdateWithoutRequiredFieldsInputSchema'
import { PipelineStageUncheckedUpdateWithoutRequiredFieldsInputSchema } from './PipelineStageUncheckedUpdateWithoutRequiredFieldsInputSchema'
import { PipelineStageCreateWithoutRequiredFieldsInputSchema } from './PipelineStageCreateWithoutRequiredFieldsInputSchema'
import { PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema } from './PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema'
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema'

export const PipelineStageUpsertWithoutRequiredFieldsInputSchema: z.ZodType<Prisma.PipelineStageUpsertWithoutRequiredFieldsInput> = z
    .object({
        update: z.union([
            z.lazy(() => PipelineStageUpdateWithoutRequiredFieldsInputSchema),
            z.lazy(() => PipelineStageUncheckedUpdateWithoutRequiredFieldsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PipelineStageCreateWithoutRequiredFieldsInputSchema),
            z.lazy(() => PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema)
        ]),
        where: z.lazy(() => PipelineStageWhereInputSchema).optional()
    })
    .strict()

export default PipelineStageUpsertWithoutRequiredFieldsInputSchema
