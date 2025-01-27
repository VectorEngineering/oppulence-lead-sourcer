import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadContactPreferenceUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadContactPreferenceUpdateManyMutationInputSchema'
import { LeadContactPreferenceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadContactPreferenceUncheckedUpdateManyInputSchema'
import { LeadContactPreferenceWhereInputSchema } from '../inputTypeSchemas/LeadContactPreferenceWhereInputSchema'

export const LeadContactPreferenceUpdateManyArgsSchema: z.ZodType<Prisma.LeadContactPreferenceUpdateManyArgs> = z
    .object({
        data: z.union([LeadContactPreferenceUpdateManyMutationInputSchema, LeadContactPreferenceUncheckedUpdateManyInputSchema]),
        where: LeadContactPreferenceWhereInputSchema.optional()
    })
    .strict()

export default LeadContactPreferenceUpdateManyArgsSchema
