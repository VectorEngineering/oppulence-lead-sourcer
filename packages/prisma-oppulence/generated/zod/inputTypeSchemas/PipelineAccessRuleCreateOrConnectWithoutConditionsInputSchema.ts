import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAccessRuleWhereUniqueInputSchema } from './PipelineAccessRuleWhereUniqueInputSchema'
import { PipelineAccessRuleCreateWithoutConditionsInputSchema } from './PipelineAccessRuleCreateWithoutConditionsInputSchema'
import { PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema } from './PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema'

export const PipelineAccessRuleCreateOrConnectWithoutConditionsInputSchema: z.ZodType<Prisma.PipelineAccessRuleCreateOrConnectWithoutConditionsInput> =
    z
        .object({
            where: z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => PipelineAccessRuleCreateWithoutConditionsInputSchema),
                z.lazy(() => PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema)
            ])
        })
        .strict()

export default PipelineAccessRuleCreateOrConnectWithoutConditionsInputSchema
