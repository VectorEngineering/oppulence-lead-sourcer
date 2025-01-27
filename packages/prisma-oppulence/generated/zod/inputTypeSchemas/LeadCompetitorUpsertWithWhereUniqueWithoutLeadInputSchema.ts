import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitorWhereUniqueInputSchema } from './LeadCompetitorWhereUniqueInputSchema'
import { LeadCompetitorUpdateWithoutLeadInputSchema } from './LeadCompetitorUpdateWithoutLeadInputSchema'
import { LeadCompetitorUncheckedUpdateWithoutLeadInputSchema } from './LeadCompetitorUncheckedUpdateWithoutLeadInputSchema'
import { LeadCompetitorCreateWithoutLeadInputSchema } from './LeadCompetitorCreateWithoutLeadInputSchema'
import { LeadCompetitorUncheckedCreateWithoutLeadInputSchema } from './LeadCompetitorUncheckedCreateWithoutLeadInputSchema'

export const LeadCompetitorUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitorUpsertWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadCompetitorWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadCompetitorUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitorUncheckedUpdateWithoutLeadInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadCompetitorCreateWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitorUncheckedCreateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadCompetitorUpsertWithWhereUniqueWithoutLeadInputSchema
