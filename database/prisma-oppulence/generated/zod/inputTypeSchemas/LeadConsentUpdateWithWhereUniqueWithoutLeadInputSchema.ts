import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadConsentWhereUniqueInputSchema } from './LeadConsentWhereUniqueInputSchema'
import { LeadConsentUpdateWithoutLeadInputSchema } from './LeadConsentUpdateWithoutLeadInputSchema'
import { LeadConsentUncheckedUpdateWithoutLeadInputSchema } from './LeadConsentUncheckedUpdateWithoutLeadInputSchema'

export const LeadConsentUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadConsentUpdateWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadConsentWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => LeadConsentUpdateWithoutLeadInputSchema),
            z.lazy(() => LeadConsentUncheckedUpdateWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadConsentUpdateWithWhereUniqueWithoutLeadInputSchema
