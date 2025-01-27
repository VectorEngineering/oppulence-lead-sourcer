import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTaskSelectSchema } from '../inputTypeSchemas/LeadTaskSelectSchema'
import { LeadTaskIncludeSchema } from '../inputTypeSchemas/LeadTaskIncludeSchema'

export const LeadTaskArgsSchema: z.ZodType<Prisma.LeadTaskDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadTaskSelectSchema).optional(),
        include: z.lazy(() => LeadTaskIncludeSchema).optional()
    })
    .strict()

export default LeadTaskArgsSchema
