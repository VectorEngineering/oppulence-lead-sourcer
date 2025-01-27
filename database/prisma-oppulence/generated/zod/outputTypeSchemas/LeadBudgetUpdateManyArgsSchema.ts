import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadBudgetUpdateManyMutationInputSchema'
import { LeadBudgetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadBudgetUncheckedUpdateManyInputSchema'
import { LeadBudgetWhereInputSchema } from '../inputTypeSchemas/LeadBudgetWhereInputSchema'

export const LeadBudgetUpdateManyArgsSchema: z.ZodType<Prisma.LeadBudgetUpdateManyArgs> = z
    .object({
        data: z.union([LeadBudgetUpdateManyMutationInputSchema, LeadBudgetUncheckedUpdateManyInputSchema]),
        where: LeadBudgetWhereInputSchema.optional()
    })
    .strict()

export default LeadBudgetUpdateManyArgsSchema
