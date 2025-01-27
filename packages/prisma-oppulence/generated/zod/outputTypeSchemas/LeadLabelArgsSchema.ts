import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadLabelSelectSchema } from '../inputTypeSchemas/LeadLabelSelectSchema'
import { LeadLabelIncludeSchema } from '../inputTypeSchemas/LeadLabelIncludeSchema'

export const LeadLabelArgsSchema: z.ZodType<Prisma.LeadLabelDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadLabelSelectSchema).optional(),
        include: z.lazy(() => LeadLabelIncludeSchema).optional()
    })
    .strict()

export default LeadLabelArgsSchema
