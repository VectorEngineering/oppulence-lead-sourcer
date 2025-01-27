import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema'
import { PipelineAutomationCreateWithoutConditionsInputSchema } from './PipelineAutomationCreateWithoutConditionsInputSchema'
import { PipelineAutomationUncheckedCreateWithoutConditionsInputSchema } from './PipelineAutomationUncheckedCreateWithoutConditionsInputSchema'

export const PipelineAutomationCreateOrConnectWithoutConditionsInputSchema: z.ZodType<Prisma.PipelineAutomationCreateOrConnectWithoutConditionsInput> =
    z
        .object({
            where: z.lazy(() => PipelineAutomationWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => PipelineAutomationCreateWithoutConditionsInputSchema),
                z.lazy(() => PipelineAutomationUncheckedCreateWithoutConditionsInputSchema)
            ])
        })
        .strict()

export default PipelineAutomationCreateOrConnectWithoutConditionsInputSchema
