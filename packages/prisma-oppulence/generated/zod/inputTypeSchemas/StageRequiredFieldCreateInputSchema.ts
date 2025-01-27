import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageCreateNestedOneWithoutRequiredFieldsInputSchema } from './PipelineStageCreateNestedOneWithoutRequiredFieldsInputSchema'

export const StageRequiredFieldCreateInputSchema: z.ZodType<Prisma.StageRequiredFieldCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        fieldName: z.string(),
        errorMessage: z.string().optional().nullable(),
        stage: z.lazy(() => PipelineStageCreateNestedOneWithoutRequiredFieldsInputSchema)
    })
    .strict()

export default StageRequiredFieldCreateInputSchema
