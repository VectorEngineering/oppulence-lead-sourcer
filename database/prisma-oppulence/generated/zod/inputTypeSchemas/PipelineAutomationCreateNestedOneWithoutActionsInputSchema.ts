import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationCreateWithoutActionsInputSchema } from './PipelineAutomationCreateWithoutActionsInputSchema'
import { PipelineAutomationUncheckedCreateWithoutActionsInputSchema } from './PipelineAutomationUncheckedCreateWithoutActionsInputSchema'
import { PipelineAutomationCreateOrConnectWithoutActionsInputSchema } from './PipelineAutomationCreateOrConnectWithoutActionsInputSchema'
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema'

export const PipelineAutomationCreateNestedOneWithoutActionsInputSchema: z.ZodType<Prisma.PipelineAutomationCreateNestedOneWithoutActionsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineAutomationCreateWithoutActionsInputSchema),
                    z.lazy(() => PipelineAutomationUncheckedCreateWithoutActionsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => PipelineAutomationCreateOrConnectWithoutActionsInputSchema).optional(),
            connect: z.lazy(() => PipelineAutomationWhereUniqueInputSchema).optional()
        })
        .strict()

export default PipelineAutomationCreateNestedOneWithoutActionsInputSchema
