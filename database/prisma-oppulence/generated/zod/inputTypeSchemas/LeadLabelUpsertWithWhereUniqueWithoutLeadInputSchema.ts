import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadLabelWhereUniqueInputSchema } from './LeadLabelWhereUniqueInputSchema'
import { LeadLabelUpdateWithoutLeadInputSchema } from './LeadLabelUpdateWithoutLeadInputSchema'
import { LeadLabelUncheckedUpdateWithoutLeadInputSchema } from './LeadLabelUncheckedUpdateWithoutLeadInputSchema'
import { LeadLabelCreateWithoutLeadInputSchema } from './LeadLabelCreateWithoutLeadInputSchema'
import { LeadLabelUncheckedCreateWithoutLeadInputSchema } from './LeadLabelUncheckedCreateWithoutLeadInputSchema'

export const LeadLabelUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadLabelUpsertWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadLabelWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => LeadLabelUpdateWithoutLeadInputSchema),
            z.lazy(() => LeadLabelUncheckedUpdateWithoutLeadInputSchema)
        ]),
        create: z.union([z.lazy(() => LeadLabelCreateWithoutLeadInputSchema), z.lazy(() => LeadLabelUncheckedCreateWithoutLeadInputSchema)])
    })
    .strict()

export default LeadLabelUpsertWithWhereUniqueWithoutLeadInputSchema
