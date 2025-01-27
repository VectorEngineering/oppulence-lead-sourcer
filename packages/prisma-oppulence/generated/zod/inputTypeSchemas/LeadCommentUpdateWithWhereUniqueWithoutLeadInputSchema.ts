import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommentWhereUniqueInputSchema } from './LeadCommentWhereUniqueInputSchema'
import { LeadCommentUpdateWithoutLeadInputSchema } from './LeadCommentUpdateWithoutLeadInputSchema'
import { LeadCommentUncheckedUpdateWithoutLeadInputSchema } from './LeadCommentUncheckedUpdateWithoutLeadInputSchema'

export const LeadCommentUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommentUpdateWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadCommentWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => LeadCommentUpdateWithoutLeadInputSchema),
            z.lazy(() => LeadCommentUncheckedUpdateWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadCommentUpdateWithWhereUniqueWithoutLeadInputSchema
