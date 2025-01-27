import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

export const LeadSocialProfileIncludeSchema: z.ZodType<Prisma.LeadSocialProfileInclude> = z
    .object({
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export default LeadSocialProfileIncludeSchema
