import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCommentWhereInputSchema } from '../inputTypeSchemas/LeadCommentWhereInputSchema'

export const LeadCommentDeleteManyArgsSchema: z.ZodType<Prisma.LeadCommentDeleteManyArgs> = z
    .object({
        where: LeadCommentWhereInputSchema.optional()
    })
    .strict()

export default LeadCommentDeleteManyArgsSchema
