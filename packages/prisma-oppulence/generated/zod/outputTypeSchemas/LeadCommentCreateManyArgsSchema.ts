import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCommentCreateManyInputSchema } from '../inputTypeSchemas/LeadCommentCreateManyInputSchema'

export const LeadCommentCreateManyArgsSchema: z.ZodType<Prisma.LeadCommentCreateManyArgs> = z
    .object({
        data: z.union([LeadCommentCreateManyInputSchema, LeadCommentCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadCommentCreateManyArgsSchema
