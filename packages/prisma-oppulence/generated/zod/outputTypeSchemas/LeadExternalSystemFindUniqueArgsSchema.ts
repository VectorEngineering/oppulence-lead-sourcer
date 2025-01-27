import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadExternalSystemIncludeSchema } from '../inputTypeSchemas/LeadExternalSystemIncludeSchema'
import { LeadExternalSystemWhereUniqueInputSchema } from '../inputTypeSchemas/LeadExternalSystemWhereUniqueInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const LeadExternalSystemFindUniqueArgsSchema: z.ZodType<Prisma.LeadExternalSystemFindUniqueArgs> = z
    .object({
        select: LeadExternalSystemSelectSchema.optional(),
        include: LeadExternalSystemIncludeSchema.optional(),
        where: LeadExternalSystemWhereUniqueInputSchema
    })
    .strict()

export default LeadExternalSystemFindUniqueArgsSchema
