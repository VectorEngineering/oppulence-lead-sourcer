import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadCommentCreateManyInputSchema: z.ZodType<Prisma.LeadCommentCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        leadId: z.string(),
        content: z.string(),
        type: z.string().optional().nullable(),
        visibility: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable()
    })
    .strict()

export default LeadCommentCreateManyInputSchema
