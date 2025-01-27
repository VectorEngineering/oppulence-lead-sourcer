import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetSelectSchema } from '../inputTypeSchemas/LeadBudgetSelectSchema'
import { LeadBudgetIncludeSchema } from '../inputTypeSchemas/LeadBudgetIncludeSchema'

export const LeadBudgetArgsSchema: z.ZodType<Prisma.LeadBudgetDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadBudgetSelectSchema).optional(),
        include: z.lazy(() => LeadBudgetIncludeSchema).optional()
    })
    .strict()

export default LeadBudgetArgsSchema
