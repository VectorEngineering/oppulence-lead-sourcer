import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreWhereUniqueInputSchema } from './LeadScoreWhereUniqueInputSchema'
import { LeadScoreUpdateWithoutLeadInputSchema } from './LeadScoreUpdateWithoutLeadInputSchema'
import { LeadScoreUncheckedUpdateWithoutLeadInputSchema } from './LeadScoreUncheckedUpdateWithoutLeadInputSchema'

export const LeadScoreUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadScoreUpdateWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadScoreWhereUniqueInputSchema),
        data: z.union([z.lazy(() => LeadScoreUpdateWithoutLeadInputSchema), z.lazy(() => LeadScoreUncheckedUpdateWithoutLeadInputSchema)])
    })
    .strict()

export default LeadScoreUpdateWithWhereUniqueWithoutLeadInputSchema
