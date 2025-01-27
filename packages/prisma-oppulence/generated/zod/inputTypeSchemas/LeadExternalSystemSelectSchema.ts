import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

export const LeadExternalSystemSelectSchema: z.ZodType<Prisma.LeadExternalSystemSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        provider: z.boolean().optional(),
        externalId: z.boolean().optional(),
        lastSynced: z.boolean().optional(),
        syncStatus: z.boolean().optional(),
        errorMessage: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export default LeadExternalSystemSelectSchema
