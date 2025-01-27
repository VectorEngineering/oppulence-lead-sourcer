import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetRevisionUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionUpdateManyMutationInputSchema'
import { LeadBudgetRevisionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionUncheckedUpdateManyInputSchema'
import { LeadBudgetRevisionWhereInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionWhereInputSchema'

export const LeadBudgetRevisionUpdateManyArgsSchema: z.ZodType<Prisma.LeadBudgetRevisionUpdateManyArgs> = z
    .object({
        data: z.union([LeadBudgetRevisionUpdateManyMutationInputSchema, LeadBudgetRevisionUncheckedUpdateManyInputSchema]),
        where: LeadBudgetRevisionWhereInputSchema.optional()
    })
    .strict()

export default LeadBudgetRevisionUpdateManyArgsSchema
