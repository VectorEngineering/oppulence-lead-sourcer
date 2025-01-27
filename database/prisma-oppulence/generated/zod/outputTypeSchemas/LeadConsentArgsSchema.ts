import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadConsentSelectSchema } from '../inputTypeSchemas/LeadConsentSelectSchema'
import { LeadConsentIncludeSchema } from '../inputTypeSchemas/LeadConsentIncludeSchema'

export const LeadConsentArgsSchema: z.ZodType<Prisma.LeadConsentDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadConsentSelectSchema).optional(),
        include: z.lazy(() => LeadConsentIncludeSchema).optional()
    })
    .strict()

export default LeadConsentArgsSchema
