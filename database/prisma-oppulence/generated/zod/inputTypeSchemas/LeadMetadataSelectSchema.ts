import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

export const LeadMetadataSelectSchema: z.ZodType<Prisma.LeadMetadataSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        key: z.boolean().optional(),
        value: z.boolean().optional(),
        type: z.boolean().optional(),
        category: z.boolean().optional(),
        description: z.boolean().optional(),
        isSearchable: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export default LeadMetadataSelectSchema
