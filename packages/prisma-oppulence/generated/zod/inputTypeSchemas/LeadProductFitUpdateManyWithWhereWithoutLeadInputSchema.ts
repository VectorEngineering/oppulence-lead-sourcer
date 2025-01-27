import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitScalarWhereInputSchema } from './LeadProductFitScalarWhereInputSchema'
import { LeadProductFitUpdateManyMutationInputSchema } from './LeadProductFitUpdateManyMutationInputSchema'
import { LeadProductFitUncheckedUpdateManyWithoutLeadInputSchema } from './LeadProductFitUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadProductFitUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadProductFitUpdateManyWithWhereWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadProductFitScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadProductFitUpdateManyMutationInputSchema),
                z.lazy(() => LeadProductFitUncheckedUpdateManyWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadProductFitUpdateManyWithWhereWithoutLeadInputSchema
