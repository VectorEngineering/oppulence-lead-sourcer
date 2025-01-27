import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutCommentsInputSchema } from './LeadCreateNestedOneWithoutCommentsInputSchema'

export const LeadCommentCreateInputSchema: z.ZodType<Prisma.LeadCommentCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        content: z.string(),
        type: z.string().optional().nullable(),
        visibility: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutCommentsInputSchema)
    })
    .strict()

export default LeadCommentCreateInputSchema
