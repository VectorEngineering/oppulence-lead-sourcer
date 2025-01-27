import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadRiskWhereUniqueInputSchema } from './LeadRiskWhereUniqueInputSchema'
import { LeadRiskUpdateWithoutLeadInputSchema } from './LeadRiskUpdateWithoutLeadInputSchema'
import { LeadRiskUncheckedUpdateWithoutLeadInputSchema } from './LeadRiskUncheckedUpdateWithoutLeadInputSchema'
import { LeadRiskCreateWithoutLeadInputSchema } from './LeadRiskCreateWithoutLeadInputSchema'
import { LeadRiskUncheckedCreateWithoutLeadInputSchema } from './LeadRiskUncheckedCreateWithoutLeadInputSchema'

export const LeadRiskUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadRiskUpsertWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadRiskWhereUniqueInputSchema),
        update: z.union([z.lazy(() => LeadRiskUpdateWithoutLeadInputSchema), z.lazy(() => LeadRiskUncheckedUpdateWithoutLeadInputSchema)]),
        create: z.union([z.lazy(() => LeadRiskCreateWithoutLeadInputSchema), z.lazy(() => LeadRiskUncheckedCreateWithoutLeadInputSchema)])
    })
    .strict()

export default LeadRiskUpsertWithWhereUniqueWithoutLeadInputSchema
