import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadPersonalDetailsUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsUpdateManyMutationInputSchema'
import { LeadPersonalDetailsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsUncheckedUpdateManyInputSchema'
import { LeadPersonalDetailsWhereInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsWhereInputSchema'

export const LeadPersonalDetailsUpdateManyArgsSchema: z.ZodType<Prisma.LeadPersonalDetailsUpdateManyArgs> = z
    .object({
        data: z.union([LeadPersonalDetailsUpdateManyMutationInputSchema, LeadPersonalDetailsUncheckedUpdateManyInputSchema]),
        where: LeadPersonalDetailsWhereInputSchema.optional()
    })
    .strict()

export default LeadPersonalDetailsUpdateManyArgsSchema
