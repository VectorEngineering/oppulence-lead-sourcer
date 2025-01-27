import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutDecisionMakersInputSchema } from './LeadUpdateWithoutDecisionMakersInputSchema'
import { LeadUncheckedUpdateWithoutDecisionMakersInputSchema } from './LeadUncheckedUpdateWithoutDecisionMakersInputSchema'

export const LeadUpdateToOneWithWhereWithoutDecisionMakersInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutDecisionMakersInput> =
    z
        .object({
            where: z.lazy(() => LeadWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadUpdateWithoutDecisionMakersInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutDecisionMakersInputSchema)
            ])
        })
        .strict()

export default LeadUpdateToOneWithWhereWithoutDecisionMakersInputSchema
