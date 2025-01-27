import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

export const LeadCommentSelectSchema: z.ZodType<Prisma.LeadCommentSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        content: z.boolean().optional(),
        type: z.boolean().optional(),
        visibility: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export default LeadCommentSelectSchema
