import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadCommentUncheckedCreateInputSchema: z.ZodType<Prisma.LeadCommentUncheckedCreateInput> = z
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

export default LeadCommentUncheckedCreateInputSchema
