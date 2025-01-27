import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const PipelineCountOutputTypeSelectSchema: z.ZodType<Prisma.PipelineCountOutputTypeSelect> = z
    .object({
        stages: z.boolean().optional(),
        deals: z.boolean().optional(),
        kpis: z.boolean().optional(),
        automations: z.boolean().optional(),
        stageDurations: z.boolean().optional(),
        integrations: z.boolean().optional(),
        accessRules: z.boolean().optional()
    })
    .strict()

export default PipelineCountOutputTypeSelectSchema
