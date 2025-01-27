import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'
import { PipelineUpdateWithoutAccessRulesInputSchema } from './PipelineUpdateWithoutAccessRulesInputSchema'
import { PipelineUncheckedUpdateWithoutAccessRulesInputSchema } from './PipelineUncheckedUpdateWithoutAccessRulesInputSchema'

export const PipelineUpdateToOneWithWhereWithoutAccessRulesInputSchema: z.ZodType<Prisma.PipelineUpdateToOneWithWhereWithoutAccessRulesInput> =
    z
        .object({
            where: z.lazy(() => PipelineWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => PipelineUpdateWithoutAccessRulesInputSchema),
                z.lazy(() => PipelineUncheckedUpdateWithoutAccessRulesInputSchema)
            ])
        })
        .strict()

export default PipelineUpdateToOneWithWhereWithoutAccessRulesInputSchema
