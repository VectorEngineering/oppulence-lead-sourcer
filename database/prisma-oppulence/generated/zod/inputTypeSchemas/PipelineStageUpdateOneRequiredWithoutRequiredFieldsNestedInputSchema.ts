import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageCreateWithoutRequiredFieldsInputSchema } from './PipelineStageCreateWithoutRequiredFieldsInputSchema'
import { PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema } from './PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema'
import { PipelineStageCreateOrConnectWithoutRequiredFieldsInputSchema } from './PipelineStageCreateOrConnectWithoutRequiredFieldsInputSchema'
import { PipelineStageUpsertWithoutRequiredFieldsInputSchema } from './PipelineStageUpsertWithoutRequiredFieldsInputSchema'
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema'
import { PipelineStageUpdateToOneWithWhereWithoutRequiredFieldsInputSchema } from './PipelineStageUpdateToOneWithWhereWithoutRequiredFieldsInputSchema'
import { PipelineStageUpdateWithoutRequiredFieldsInputSchema } from './PipelineStageUpdateWithoutRequiredFieldsInputSchema'
import { PipelineStageUncheckedUpdateWithoutRequiredFieldsInputSchema } from './PipelineStageUncheckedUpdateWithoutRequiredFieldsInputSchema'

export const PipelineStageUpdateOneRequiredWithoutRequiredFieldsNestedInputSchema: z.ZodType<Prisma.PipelineStageUpdateOneRequiredWithoutRequiredFieldsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineStageCreateWithoutRequiredFieldsInputSchema),
                    z.lazy(() => PipelineStageUncheckedCreateWithoutRequiredFieldsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => PipelineStageCreateOrConnectWithoutRequiredFieldsInputSchema).optional(),
            upsert: z.lazy(() => PipelineStageUpsertWithoutRequiredFieldsInputSchema).optional(),
            connect: z.lazy(() => PipelineStageWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => PipelineStageUpdateToOneWithWhereWithoutRequiredFieldsInputSchema),
                    z.lazy(() => PipelineStageUpdateWithoutRequiredFieldsInputSchema),
                    z.lazy(() => PipelineStageUncheckedUpdateWithoutRequiredFieldsInputSchema)
                ])
                .optional()
        })
        .strict()

export default PipelineStageUpdateOneRequiredWithoutRequiredFieldsNestedInputSchema
