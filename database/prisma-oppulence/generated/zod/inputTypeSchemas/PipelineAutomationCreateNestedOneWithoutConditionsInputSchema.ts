import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationCreateWithoutConditionsInputSchema } from './PipelineAutomationCreateWithoutConditionsInputSchema'
import { PipelineAutomationUncheckedCreateWithoutConditionsInputSchema } from './PipelineAutomationUncheckedCreateWithoutConditionsInputSchema'
import { PipelineAutomationCreateOrConnectWithoutConditionsInputSchema } from './PipelineAutomationCreateOrConnectWithoutConditionsInputSchema'
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema'

export const PipelineAutomationCreateNestedOneWithoutConditionsInputSchema: z.ZodType<Prisma.PipelineAutomationCreateNestedOneWithoutConditionsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineAutomationCreateWithoutConditionsInputSchema),
                    z.lazy(() => PipelineAutomationUncheckedCreateWithoutConditionsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => PipelineAutomationCreateOrConnectWithoutConditionsInputSchema).optional(),
            connect: z.lazy(() => PipelineAutomationWhereUniqueInputSchema).optional()
        })
        .strict()

export default PipelineAutomationCreateNestedOneWithoutConditionsInputSchema
