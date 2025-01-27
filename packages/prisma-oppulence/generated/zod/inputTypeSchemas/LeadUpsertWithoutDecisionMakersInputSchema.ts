import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutDecisionMakersInputSchema } from './LeadUpdateWithoutDecisionMakersInputSchema'
import { LeadUncheckedUpdateWithoutDecisionMakersInputSchema } from './LeadUncheckedUpdateWithoutDecisionMakersInputSchema'
import { LeadCreateWithoutDecisionMakersInputSchema } from './LeadCreateWithoutDecisionMakersInputSchema'
import { LeadUncheckedCreateWithoutDecisionMakersInputSchema } from './LeadUncheckedCreateWithoutDecisionMakersInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutDecisionMakersInputSchema: z.ZodType<Prisma.LeadUpsertWithoutDecisionMakersInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadUpdateWithoutDecisionMakersInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutDecisionMakersInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadCreateWithoutDecisionMakersInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutDecisionMakersInputSchema)
        ]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutDecisionMakersInputSchema
