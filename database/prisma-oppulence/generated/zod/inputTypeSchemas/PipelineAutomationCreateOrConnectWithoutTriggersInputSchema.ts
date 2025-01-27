import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema'
import { PipelineAutomationCreateWithoutTriggersInputSchema } from './PipelineAutomationCreateWithoutTriggersInputSchema'
import { PipelineAutomationUncheckedCreateWithoutTriggersInputSchema } from './PipelineAutomationUncheckedCreateWithoutTriggersInputSchema'

export const PipelineAutomationCreateOrConnectWithoutTriggersInputSchema: z.ZodType<Prisma.PipelineAutomationCreateOrConnectWithoutTriggersInput> =
    z
        .object({
            where: z.lazy(() => PipelineAutomationWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => PipelineAutomationCreateWithoutTriggersInputSchema),
                z.lazy(() => PipelineAutomationUncheckedCreateWithoutTriggersInputSchema)
            ])
        })
        .strict()

export default PipelineAutomationCreateOrConnectWithoutTriggersInputSchema
