import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

export const LeadContactPreferenceIncludeSchema: z.ZodType<Prisma.LeadContactPreferenceInclude> = z
    .object({
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export default LeadContactPreferenceIncludeSchema
