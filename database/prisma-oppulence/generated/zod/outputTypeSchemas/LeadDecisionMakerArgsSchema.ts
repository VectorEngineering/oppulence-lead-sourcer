import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadDecisionMakerSelectSchema } from '../inputTypeSchemas/LeadDecisionMakerSelectSchema'
import { LeadDecisionMakerIncludeSchema } from '../inputTypeSchemas/LeadDecisionMakerIncludeSchema'

export const LeadDecisionMakerArgsSchema: z.ZodType<Prisma.LeadDecisionMakerDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadDecisionMakerSelectSchema).optional(),
        include: z.lazy(() => LeadDecisionMakerIncludeSchema).optional()
    })
    .strict()

export default LeadDecisionMakerArgsSchema
