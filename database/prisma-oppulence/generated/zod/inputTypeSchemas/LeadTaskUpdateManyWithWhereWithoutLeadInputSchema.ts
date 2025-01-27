import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskScalarWhereInputSchema } from './LeadTaskScalarWhereInputSchema'
import { LeadTaskUpdateManyMutationInputSchema } from './LeadTaskUpdateManyMutationInputSchema'
import { LeadTaskUncheckedUpdateManyWithoutLeadInputSchema } from './LeadTaskUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadTaskUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadTaskUpdateManyWithWhereWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadTaskScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => LeadTaskUpdateManyMutationInputSchema),
            z.lazy(() => LeadTaskUncheckedUpdateManyWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadTaskUpdateManyWithWhereWithoutLeadInputSchema
