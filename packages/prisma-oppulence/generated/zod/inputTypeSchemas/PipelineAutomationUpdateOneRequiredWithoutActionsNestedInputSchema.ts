import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationCreateWithoutActionsInputSchema } from './PipelineAutomationCreateWithoutActionsInputSchema'
import { PipelineAutomationUncheckedCreateWithoutActionsInputSchema } from './PipelineAutomationUncheckedCreateWithoutActionsInputSchema'
import { PipelineAutomationCreateOrConnectWithoutActionsInputSchema } from './PipelineAutomationCreateOrConnectWithoutActionsInputSchema'
import { PipelineAutomationUpsertWithoutActionsInputSchema } from './PipelineAutomationUpsertWithoutActionsInputSchema'
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema'
import { PipelineAutomationUpdateToOneWithWhereWithoutActionsInputSchema } from './PipelineAutomationUpdateToOneWithWhereWithoutActionsInputSchema'
import { PipelineAutomationUpdateWithoutActionsInputSchema } from './PipelineAutomationUpdateWithoutActionsInputSchema'
import { PipelineAutomationUncheckedUpdateWithoutActionsInputSchema } from './PipelineAutomationUncheckedUpdateWithoutActionsInputSchema'

export const PipelineAutomationUpdateOneRequiredWithoutActionsNestedInputSchema: z.ZodType<Prisma.PipelineAutomationUpdateOneRequiredWithoutActionsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineAutomationCreateWithoutActionsInputSchema),
                    z.lazy(() => PipelineAutomationUncheckedCreateWithoutActionsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => PipelineAutomationCreateOrConnectWithoutActionsInputSchema).optional(),
            upsert: z.lazy(() => PipelineAutomationUpsertWithoutActionsInputSchema).optional(),
            connect: z.lazy(() => PipelineAutomationWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => PipelineAutomationUpdateToOneWithWhereWithoutActionsInputSchema),
                    z.lazy(() => PipelineAutomationUpdateWithoutActionsInputSchema),
                    z.lazy(() => PipelineAutomationUncheckedUpdateWithoutActionsInputSchema)
                ])
                .optional()
        })
        .strict()

export default PipelineAutomationUpdateOneRequiredWithoutActionsNestedInputSchema
