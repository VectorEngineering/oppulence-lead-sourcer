import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTouchpointSelectSchema } from '../inputTypeSchemas/LeadTouchpointSelectSchema'
import { LeadTouchpointIncludeSchema } from '../inputTypeSchemas/LeadTouchpointIncludeSchema'

export const LeadTouchpointArgsSchema: z.ZodType<Prisma.LeadTouchpointDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadTouchpointSelectSchema).optional(),
        include: z.lazy(() => LeadTouchpointIncludeSchema).optional()
    })
    .strict()

export default LeadTouchpointArgsSchema
