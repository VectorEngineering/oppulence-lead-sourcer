import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadDecisionMakerScalarWhereInputSchema } from './LeadDecisionMakerScalarWhereInputSchema'
import { LeadDecisionMakerUpdateManyMutationInputSchema } from './LeadDecisionMakerUpdateManyMutationInputSchema'
import { LeadDecisionMakerUncheckedUpdateManyWithoutLeadInputSchema } from './LeadDecisionMakerUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadDecisionMakerUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadDecisionMakerUpdateManyWithWhereWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadDecisionMakerScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadDecisionMakerUpdateManyMutationInputSchema),
                z.lazy(() => LeadDecisionMakerUncheckedUpdateManyWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadDecisionMakerUpdateManyWithWhereWithoutLeadInputSchema
