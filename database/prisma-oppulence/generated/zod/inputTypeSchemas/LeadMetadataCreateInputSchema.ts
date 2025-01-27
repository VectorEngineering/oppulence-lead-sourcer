import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutMetadataInputSchema } from './LeadCreateNestedOneWithoutMetadataInputSchema'

export const LeadMetadataCreateInputSchema: z.ZodType<Prisma.LeadMetadataCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        key: z.string(),
        value: z.string(),
        type: z.string(),
        category: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        isSearchable: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutMetadataInputSchema)
    })
    .strict()

export default LeadMetadataCreateInputSchema
