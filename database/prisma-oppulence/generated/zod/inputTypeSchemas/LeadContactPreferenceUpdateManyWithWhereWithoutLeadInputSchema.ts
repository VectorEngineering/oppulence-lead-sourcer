import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadContactPreferenceScalarWhereInputSchema } from './LeadContactPreferenceScalarWhereInputSchema'
import { LeadContactPreferenceUpdateManyMutationInputSchema } from './LeadContactPreferenceUpdateManyMutationInputSchema'
import { LeadContactPreferenceUncheckedUpdateManyWithoutLeadInputSchema } from './LeadContactPreferenceUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadContactPreferenceUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadContactPreferenceUpdateManyWithWhereWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadContactPreferenceScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadContactPreferenceUpdateManyMutationInputSchema),
                z.lazy(() => LeadContactPreferenceUncheckedUpdateManyWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadContactPreferenceUpdateManyWithWhereWithoutLeadInputSchema
