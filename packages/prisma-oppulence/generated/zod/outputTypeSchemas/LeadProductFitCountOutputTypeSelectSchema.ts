import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const LeadProductFitCountOutputTypeSelectSchema: z.ZodType<Prisma.LeadProductFitCountOutputTypeSelect> = z
    .object({
        assessments: z.boolean().optional()
    })
    .strict()

export default LeadProductFitCountOutputTypeSelectSchema
