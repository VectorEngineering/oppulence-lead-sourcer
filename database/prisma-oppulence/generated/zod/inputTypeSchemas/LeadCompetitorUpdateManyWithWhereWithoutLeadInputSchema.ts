import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitorScalarWhereInputSchema } from './LeadCompetitorScalarWhereInputSchema'
import { LeadCompetitorUpdateManyMutationInputSchema } from './LeadCompetitorUpdateManyMutationInputSchema'
import { LeadCompetitorUncheckedUpdateManyWithoutLeadInputSchema } from './LeadCompetitorUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadCompetitorUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitorUpdateManyWithWhereWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadCompetitorScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadCompetitorUpdateManyMutationInputSchema),
                z.lazy(() => LeadCompetitorUncheckedUpdateManyWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadCompetitorUpdateManyWithWhereWithoutLeadInputSchema
