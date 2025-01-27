import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadScoreSelectSchema } from '../inputTypeSchemas/LeadScoreSelectSchema'
import { LeadScoreIncludeSchema } from '../inputTypeSchemas/LeadScoreIncludeSchema'

export const LeadScoreArgsSchema: z.ZodType<Prisma.LeadScoreDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadScoreSelectSchema).optional(),
        include: z.lazy(() => LeadScoreIncludeSchema).optional()
    })
    .strict()

export default LeadScoreArgsSchema
