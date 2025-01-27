import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadMetadataCreateManyInputSchema: z.ZodType<Prisma.LeadMetadataCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        leadId: z.string(),
        key: z.string(),
        value: z.string(),
        type: z.string(),
        category: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        isSearchable: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default LeadMetadataCreateManyInputSchema
