import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCommentUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadCommentUpdateManyMutationInputSchema'
import { LeadCommentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadCommentUncheckedUpdateManyInputSchema'
import { LeadCommentWhereInputSchema } from '../inputTypeSchemas/LeadCommentWhereInputSchema'

export const LeadCommentUpdateManyArgsSchema: z.ZodType<Prisma.LeadCommentUpdateManyArgs> = z
    .object({
        data: z.union([LeadCommentUpdateManyMutationInputSchema, LeadCommentUncheckedUpdateManyInputSchema]),
        where: LeadCommentWhereInputSchema.optional()
    })
    .strict()

export default LeadCommentUpdateManyArgsSchema
