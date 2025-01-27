import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadUpdateManyMutationInputSchema'
import { LeadUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadUncheckedUpdateManyInputSchema'
import { LeadWhereInputSchema } from '../inputTypeSchemas/LeadWhereInputSchema'

export const LeadUpdateManyArgsSchema: z.ZodType<Prisma.LeadUpdateManyArgs> = z
    .object({
        data: z.union([LeadUpdateManyMutationInputSchema, LeadUncheckedUpdateManyInputSchema]),
        where: LeadWhereInputSchema.optional()
    })
    .strict()

export default LeadUpdateManyArgsSchema
