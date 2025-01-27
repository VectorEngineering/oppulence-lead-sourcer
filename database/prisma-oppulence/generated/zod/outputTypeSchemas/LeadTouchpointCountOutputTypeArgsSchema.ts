import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTouchpointCountOutputTypeSelectSchema } from './LeadTouchpointCountOutputTypeSelectSchema'

export const LeadTouchpointCountOutputTypeArgsSchema: z.ZodType<Prisma.LeadTouchpointCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadTouchpointCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default LeadTouchpointCountOutputTypeSelectSchema
