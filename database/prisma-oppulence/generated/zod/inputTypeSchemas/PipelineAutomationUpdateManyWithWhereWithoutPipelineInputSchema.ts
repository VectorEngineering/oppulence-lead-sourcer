import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationScalarWhereInputSchema } from './PipelineAutomationScalarWhereInputSchema'
import { PipelineAutomationUpdateManyMutationInputSchema } from './PipelineAutomationUpdateManyMutationInputSchema'
import { PipelineAutomationUncheckedUpdateManyWithoutPipelineInputSchema } from './PipelineAutomationUncheckedUpdateManyWithoutPipelineInputSchema'

export const PipelineAutomationUpdateManyWithWhereWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAutomationUpdateManyWithWhereWithoutPipelineInput> =
    z
        .object({
            where: z.lazy(() => PipelineAutomationScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => PipelineAutomationUpdateManyMutationInputSchema),
                z.lazy(() => PipelineAutomationUncheckedUpdateManyWithoutPipelineInputSchema)
            ])
        })
        .strict()

export default PipelineAutomationUpdateManyWithWhereWithoutPipelineInputSchema
