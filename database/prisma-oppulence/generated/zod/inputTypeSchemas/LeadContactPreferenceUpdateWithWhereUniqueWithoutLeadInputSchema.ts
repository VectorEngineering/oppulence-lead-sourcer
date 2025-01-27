import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadContactPreferenceWhereUniqueInputSchema } from './LeadContactPreferenceWhereUniqueInputSchema'
import { LeadContactPreferenceUpdateWithoutLeadInputSchema } from './LeadContactPreferenceUpdateWithoutLeadInputSchema'
import { LeadContactPreferenceUncheckedUpdateWithoutLeadInputSchema } from './LeadContactPreferenceUncheckedUpdateWithoutLeadInputSchema'

export const LeadContactPreferenceUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadContactPreferenceUpdateWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadContactPreferenceUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadContactPreferenceUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadContactPreferenceUpdateWithWhereUniqueWithoutLeadInputSchema
