import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadProductFitSelectSchema } from '../inputTypeSchemas/LeadProductFitSelectSchema'
import { LeadProductFitIncludeSchema } from '../inputTypeSchemas/LeadProductFitIncludeSchema'

export const LeadProductFitArgsSchema: z.ZodType<Prisma.LeadProductFitDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadProductFitSelectSchema).optional(),
        include: z.lazy(() => LeadProductFitIncludeSchema).optional()
    })
    .strict()

export default LeadProductFitArgsSchema
