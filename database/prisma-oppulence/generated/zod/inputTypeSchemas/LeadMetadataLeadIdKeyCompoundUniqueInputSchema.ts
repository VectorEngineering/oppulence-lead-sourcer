import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadMetadataLeadIdKeyCompoundUniqueInputSchema: z.ZodType<Prisma.LeadMetadataLeadIdKeyCompoundUniqueInput> = z
    .object({
        leadId: z.string(),
        key: z.string()
    })
    .strict()

export default LeadMetadataLeadIdKeyCompoundUniqueInputSchema
