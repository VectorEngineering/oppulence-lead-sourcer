import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetRevisionWhereInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionWhereInputSchema'

export const LeadBudgetRevisionDeleteManyArgsSchema: z.ZodType<Prisma.LeadBudgetRevisionDeleteManyArgs> = z
    .object({
        where: LeadBudgetRevisionWhereInputSchema.optional()
    })
    .strict()

export default LeadBudgetRevisionDeleteManyArgsSchema
