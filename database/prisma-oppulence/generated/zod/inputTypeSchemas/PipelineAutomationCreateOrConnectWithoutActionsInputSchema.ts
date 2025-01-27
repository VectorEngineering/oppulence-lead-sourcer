import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema'
import { PipelineAutomationCreateWithoutActionsInputSchema } from './PipelineAutomationCreateWithoutActionsInputSchema'
import { PipelineAutomationUncheckedCreateWithoutActionsInputSchema } from './PipelineAutomationUncheckedCreateWithoutActionsInputSchema'

export const PipelineAutomationCreateOrConnectWithoutActionsInputSchema: z.ZodType<Prisma.PipelineAutomationCreateOrConnectWithoutActionsInput> =
    z
        .object({
            where: z.lazy(() => PipelineAutomationWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => PipelineAutomationCreateWithoutActionsInputSchema),
                z.lazy(() => PipelineAutomationUncheckedCreateWithoutActionsInputSchema)
            ])
        })
        .strict()

export default PipelineAutomationCreateOrConnectWithoutActionsInputSchema
