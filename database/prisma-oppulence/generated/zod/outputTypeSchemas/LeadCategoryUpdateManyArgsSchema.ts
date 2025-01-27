import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadCategoryUpdateManyMutationInputSchema'
import { LeadCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadCategoryUncheckedUpdateManyInputSchema'
import { LeadCategoryWhereInputSchema } from '../inputTypeSchemas/LeadCategoryWhereInputSchema'

export const LeadCategoryUpdateManyArgsSchema: z.ZodType<Prisma.LeadCategoryUpdateManyArgs> = z
    .object({
        data: z.union([LeadCategoryUpdateManyMutationInputSchema, LeadCategoryUncheckedUpdateManyInputSchema]),
        where: LeadCategoryWhereInputSchema.optional()
    })
    .strict()

export default LeadCategoryUpdateManyArgsSchema
