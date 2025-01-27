import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadDecisionMakerWhereUniqueInputSchema } from './LeadDecisionMakerWhereUniqueInputSchema'
import { LeadDecisionMakerUpdateWithoutLeadInputSchema } from './LeadDecisionMakerUpdateWithoutLeadInputSchema'
import { LeadDecisionMakerUncheckedUpdateWithoutLeadInputSchema } from './LeadDecisionMakerUncheckedUpdateWithoutLeadInputSchema'

export const LeadDecisionMakerUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadDecisionMakerUpdateWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadDecisionMakerUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadDecisionMakerUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadDecisionMakerUpdateWithWhereUniqueWithoutLeadInputSchema
