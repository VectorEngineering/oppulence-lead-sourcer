import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema'
import { PipelineAutomationUpdateWithoutTriggersInputSchema } from './PipelineAutomationUpdateWithoutTriggersInputSchema'
import { PipelineAutomationUncheckedUpdateWithoutTriggersInputSchema } from './PipelineAutomationUncheckedUpdateWithoutTriggersInputSchema'

export const PipelineAutomationUpdateToOneWithWhereWithoutTriggersInputSchema: z.ZodType<Prisma.PipelineAutomationUpdateToOneWithWhereWithoutTriggersInput> =
    z
        .object({
            where: z.lazy(() => PipelineAutomationWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => PipelineAutomationUpdateWithoutTriggersInputSchema),
                z.lazy(() => PipelineAutomationUncheckedUpdateWithoutTriggersInputSchema)
            ])
        })
        .strict()

export default PipelineAutomationUpdateToOneWithWhereWithoutTriggersInputSchema
