import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationUpdateWithoutActionsInputSchema } from './PipelineAutomationUpdateWithoutActionsInputSchema'
import { PipelineAutomationUncheckedUpdateWithoutActionsInputSchema } from './PipelineAutomationUncheckedUpdateWithoutActionsInputSchema'
import { PipelineAutomationCreateWithoutActionsInputSchema } from './PipelineAutomationCreateWithoutActionsInputSchema'
import { PipelineAutomationUncheckedCreateWithoutActionsInputSchema } from './PipelineAutomationUncheckedCreateWithoutActionsInputSchema'
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema'

export const PipelineAutomationUpsertWithoutActionsInputSchema: z.ZodType<Prisma.PipelineAutomationUpsertWithoutActionsInput> = z
    .object({
        update: z.union([
            z.lazy(() => PipelineAutomationUpdateWithoutActionsInputSchema),
            z.lazy(() => PipelineAutomationUncheckedUpdateWithoutActionsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PipelineAutomationCreateWithoutActionsInputSchema),
            z.lazy(() => PipelineAutomationUncheckedCreateWithoutActionsInputSchema)
        ]),
        where: z.lazy(() => PipelineAutomationWhereInputSchema).optional()
    })
    .strict()

export default PipelineAutomationUpsertWithoutActionsInputSchema
