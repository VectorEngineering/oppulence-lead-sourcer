import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema'
import { LeadTaskUpdateWithoutLeadInputSchema } from './LeadTaskUpdateWithoutLeadInputSchema'
import { LeadTaskUncheckedUpdateWithoutLeadInputSchema } from './LeadTaskUncheckedUpdateWithoutLeadInputSchema'

export const LeadTaskUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadTaskUpdateWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadTaskWhereUniqueInputSchema),
        data: z.union([z.lazy(() => LeadTaskUpdateWithoutLeadInputSchema), z.lazy(() => LeadTaskUncheckedUpdateWithoutLeadInputSchema)])
    })
    .strict()

export default LeadTaskUpdateWithWhereUniqueWithoutLeadInputSchema
