import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitWhereUniqueInputSchema } from './LeadProductFitWhereUniqueInputSchema'
import { LeadProductFitUpdateWithoutLeadInputSchema } from './LeadProductFitUpdateWithoutLeadInputSchema'
import { LeadProductFitUncheckedUpdateWithoutLeadInputSchema } from './LeadProductFitUncheckedUpdateWithoutLeadInputSchema'

export const LeadProductFitUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadProductFitUpdateWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadProductFitWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadProductFitUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadProductFitUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadProductFitUpdateWithWhereUniqueWithoutLeadInputSchema
