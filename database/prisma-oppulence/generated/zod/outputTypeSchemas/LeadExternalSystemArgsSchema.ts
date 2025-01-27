import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadExternalSystemSelectSchema } from '../inputTypeSchemas/LeadExternalSystemSelectSchema'
import { LeadExternalSystemIncludeSchema } from '../inputTypeSchemas/LeadExternalSystemIncludeSchema'

export const LeadExternalSystemArgsSchema: z.ZodType<Prisma.LeadExternalSystemDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadExternalSystemSelectSchema).optional(),
        include: z.lazy(() => LeadExternalSystemIncludeSchema).optional()
    })
    .strict()

export default LeadExternalSystemArgsSchema
