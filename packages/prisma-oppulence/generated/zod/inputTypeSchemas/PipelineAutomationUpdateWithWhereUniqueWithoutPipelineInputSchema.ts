import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema'
import { PipelineAutomationUpdateWithoutPipelineInputSchema } from './PipelineAutomationUpdateWithoutPipelineInputSchema'
import { PipelineAutomationUncheckedUpdateWithoutPipelineInputSchema } from './PipelineAutomationUncheckedUpdateWithoutPipelineInputSchema'

export const PipelineAutomationUpdateWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAutomationUpdateWithWhereUniqueWithoutPipelineInput> =
    z
        .object({
            where: z.lazy(() => PipelineAutomationWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => PipelineAutomationUpdateWithoutPipelineInputSchema),
                z.lazy(() => PipelineAutomationUncheckedUpdateWithoutPipelineInputSchema)
            ])
        })
        .strict()

export default PipelineAutomationUpdateWithWhereUniqueWithoutPipelineInputSchema
