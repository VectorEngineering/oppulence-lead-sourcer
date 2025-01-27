import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadRiskWhereUniqueInputSchema } from './LeadRiskWhereUniqueInputSchema'
import { LeadRiskUpdateWithoutLeadInputSchema } from './LeadRiskUpdateWithoutLeadInputSchema'
import { LeadRiskUncheckedUpdateWithoutLeadInputSchema } from './LeadRiskUncheckedUpdateWithoutLeadInputSchema'

export const LeadRiskUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadRiskUpdateWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadRiskWhereUniqueInputSchema),
        data: z.union([z.lazy(() => LeadRiskUpdateWithoutLeadInputSchema), z.lazy(() => LeadRiskUncheckedUpdateWithoutLeadInputSchema)])
    })
    .strict()

export default LeadRiskUpdateWithWhereUniqueWithoutLeadInputSchema
