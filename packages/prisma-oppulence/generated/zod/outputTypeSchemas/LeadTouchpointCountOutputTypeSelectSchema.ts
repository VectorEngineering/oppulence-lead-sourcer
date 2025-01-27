import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const LeadTouchpointCountOutputTypeSelectSchema: z.ZodType<Prisma.LeadTouchpointCountOutputTypeSelect> = z
    .object({
        Campaign: z.boolean().optional()
    })
    .strict()

export default LeadTouchpointCountOutputTypeSelectSchema
