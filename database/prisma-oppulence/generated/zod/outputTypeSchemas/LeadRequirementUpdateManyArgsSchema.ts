import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadRequirementUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadRequirementUpdateManyMutationInputSchema'
import { LeadRequirementUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadRequirementUncheckedUpdateManyInputSchema'
import { LeadRequirementWhereInputSchema } from '../inputTypeSchemas/LeadRequirementWhereInputSchema'

export const LeadRequirementUpdateManyArgsSchema: z.ZodType<Prisma.LeadRequirementUpdateManyArgs> = z
    .object({
        data: z.union([LeadRequirementUpdateManyMutationInputSchema, LeadRequirementUncheckedUpdateManyInputSchema]),
        where: LeadRequirementWhereInputSchema.optional()
    })
    .strict()

export default LeadRequirementUpdateManyArgsSchema
