import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

export const LeadTaskIncludeSchema: z.ZodType<Prisma.LeadTaskInclude> = z
    .object({
        assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export default LeadTaskIncludeSchema
