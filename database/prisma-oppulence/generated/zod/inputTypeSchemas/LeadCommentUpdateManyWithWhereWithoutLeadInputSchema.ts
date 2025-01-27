import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommentScalarWhereInputSchema } from './LeadCommentScalarWhereInputSchema'
import { LeadCommentUpdateManyMutationInputSchema } from './LeadCommentUpdateManyMutationInputSchema'
import { LeadCommentUncheckedUpdateManyWithoutLeadInputSchema } from './LeadCommentUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadCommentUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommentUpdateManyWithWhereWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadCommentScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => LeadCommentUpdateManyMutationInputSchema),
            z.lazy(() => LeadCommentUncheckedUpdateManyWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadCommentUpdateManyWithWhereWithoutLeadInputSchema
