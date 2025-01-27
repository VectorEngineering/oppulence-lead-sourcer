import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationUpdateWithoutConditionsInputSchema } from './PipelineAutomationUpdateWithoutConditionsInputSchema'
import { PipelineAutomationUncheckedUpdateWithoutConditionsInputSchema } from './PipelineAutomationUncheckedUpdateWithoutConditionsInputSchema'
import { PipelineAutomationCreateWithoutConditionsInputSchema } from './PipelineAutomationCreateWithoutConditionsInputSchema'
import { PipelineAutomationUncheckedCreateWithoutConditionsInputSchema } from './PipelineAutomationUncheckedCreateWithoutConditionsInputSchema'
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema'

export const PipelineAutomationUpsertWithoutConditionsInputSchema: z.ZodType<Prisma.PipelineAutomationUpsertWithoutConditionsInput> = z
    .object({
        update: z.union([
            z.lazy(() => PipelineAutomationUpdateWithoutConditionsInputSchema),
            z.lazy(() => PipelineAutomationUncheckedUpdateWithoutConditionsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PipelineAutomationCreateWithoutConditionsInputSchema),
            z.lazy(() => PipelineAutomationUncheckedCreateWithoutConditionsInputSchema)
        ]),
        where: z.lazy(() => PipelineAutomationWhereInputSchema).optional()
    })
    .strict()

export default PipelineAutomationUpsertWithoutConditionsInputSchema
