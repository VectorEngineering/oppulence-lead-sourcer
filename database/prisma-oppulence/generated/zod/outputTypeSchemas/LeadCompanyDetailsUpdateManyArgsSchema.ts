import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompanyDetailsUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsUpdateManyMutationInputSchema'
import { LeadCompanyDetailsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsUncheckedUpdateManyInputSchema'
import { LeadCompanyDetailsWhereInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsWhereInputSchema'

export const LeadCompanyDetailsUpdateManyArgsSchema: z.ZodType<Prisma.LeadCompanyDetailsUpdateManyArgs> = z
    .object({
        data: z.union([LeadCompanyDetailsUpdateManyMutationInputSchema, LeadCompanyDetailsUncheckedUpdateManyInputSchema]),
        where: LeadCompanyDetailsWhereInputSchema.optional()
    })
    .strict()

export default LeadCompanyDetailsUpdateManyArgsSchema
