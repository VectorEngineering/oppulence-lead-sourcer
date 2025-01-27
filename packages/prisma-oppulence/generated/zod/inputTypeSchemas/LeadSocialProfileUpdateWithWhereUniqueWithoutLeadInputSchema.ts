import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSocialProfileWhereUniqueInputSchema } from './LeadSocialProfileWhereUniqueInputSchema'
import { LeadSocialProfileUpdateWithoutLeadInputSchema } from './LeadSocialProfileUpdateWithoutLeadInputSchema'
import { LeadSocialProfileUncheckedUpdateWithoutLeadInputSchema } from './LeadSocialProfileUncheckedUpdateWithoutLeadInputSchema'

export const LeadSocialProfileUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadSocialProfileUpdateWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadSocialProfileWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadSocialProfileUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadSocialProfileUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadSocialProfileUpdateWithWhereUniqueWithoutLeadInputSchema
