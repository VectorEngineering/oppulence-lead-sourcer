import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema'
import { LeadTaskUpdateWithoutLeadInputSchema } from './LeadTaskUpdateWithoutLeadInputSchema'
import { LeadTaskUncheckedUpdateWithoutLeadInputSchema } from './LeadTaskUncheckedUpdateWithoutLeadInputSchema'
import { LeadTaskCreateWithoutLeadInputSchema } from './LeadTaskCreateWithoutLeadInputSchema'
import { LeadTaskUncheckedCreateWithoutLeadInputSchema } from './LeadTaskUncheckedCreateWithoutLeadInputSchema'

export const LeadTaskUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadTaskUpsertWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadTaskWhereUniqueInputSchema),
        update: z.union([z.lazy(() => LeadTaskUpdateWithoutLeadInputSchema), z.lazy(() => LeadTaskUncheckedUpdateWithoutLeadInputSchema)]),
        create: z.union([z.lazy(() => LeadTaskCreateWithoutLeadInputSchema), z.lazy(() => LeadTaskUncheckedCreateWithoutLeadInputSchema)])
    })
    .strict()

export default LeadTaskUpsertWithWhereUniqueWithoutLeadInputSchema
