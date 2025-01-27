import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAccessRuleUpdateWithoutConditionsInputSchema } from './PipelineAccessRuleUpdateWithoutConditionsInputSchema'
import { PipelineAccessRuleUncheckedUpdateWithoutConditionsInputSchema } from './PipelineAccessRuleUncheckedUpdateWithoutConditionsInputSchema'
import { PipelineAccessRuleCreateWithoutConditionsInputSchema } from './PipelineAccessRuleCreateWithoutConditionsInputSchema'
import { PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema } from './PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema'
import { PipelineAccessRuleWhereInputSchema } from './PipelineAccessRuleWhereInputSchema'

export const PipelineAccessRuleUpsertWithoutConditionsInputSchema: z.ZodType<Prisma.PipelineAccessRuleUpsertWithoutConditionsInput> = z
    .object({
        update: z.union([
            z.lazy(() => PipelineAccessRuleUpdateWithoutConditionsInputSchema),
            z.lazy(() => PipelineAccessRuleUncheckedUpdateWithoutConditionsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PipelineAccessRuleCreateWithoutConditionsInputSchema),
            z.lazy(() => PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema)
        ]),
        where: z.lazy(() => PipelineAccessRuleWhereInputSchema).optional()
    })
    .strict()

export default PipelineAccessRuleUpsertWithoutConditionsInputSchema
