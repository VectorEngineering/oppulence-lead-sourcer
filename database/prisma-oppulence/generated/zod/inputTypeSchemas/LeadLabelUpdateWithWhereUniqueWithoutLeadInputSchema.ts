import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadLabelWhereUniqueInputSchema } from './LeadLabelWhereUniqueInputSchema'
import { LeadLabelUpdateWithoutLeadInputSchema } from './LeadLabelUpdateWithoutLeadInputSchema'
import { LeadLabelUncheckedUpdateWithoutLeadInputSchema } from './LeadLabelUncheckedUpdateWithoutLeadInputSchema'

export const LeadLabelUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadLabelUpdateWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadLabelWhereUniqueInputSchema),
        data: z.union([z.lazy(() => LeadLabelUpdateWithoutLeadInputSchema), z.lazy(() => LeadLabelUncheckedUpdateWithoutLeadInputSchema)])
    })
    .strict()

export default LeadLabelUpdateWithWhereUniqueWithoutLeadInputSchema
