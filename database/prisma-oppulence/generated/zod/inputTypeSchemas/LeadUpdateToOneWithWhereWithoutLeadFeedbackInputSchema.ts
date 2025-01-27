import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutLeadFeedbackInputSchema } from './LeadUpdateWithoutLeadFeedbackInputSchema'
import { LeadUncheckedUpdateWithoutLeadFeedbackInputSchema } from './LeadUncheckedUpdateWithoutLeadFeedbackInputSchema'

export const LeadUpdateToOneWithWhereWithoutLeadFeedbackInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLeadFeedbackInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => LeadUpdateWithoutLeadFeedbackInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutLeadFeedbackInputSchema)
        ])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutLeadFeedbackInputSchema
