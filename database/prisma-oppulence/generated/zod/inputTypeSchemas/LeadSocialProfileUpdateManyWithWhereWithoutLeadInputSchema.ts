import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSocialProfileScalarWhereInputSchema } from './LeadSocialProfileScalarWhereInputSchema'
import { LeadSocialProfileUpdateManyMutationInputSchema } from './LeadSocialProfileUpdateManyMutationInputSchema'
import { LeadSocialProfileUncheckedUpdateManyWithoutLeadInputSchema } from './LeadSocialProfileUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadSocialProfileUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadSocialProfileUpdateManyWithWhereWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadSocialProfileScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadSocialProfileUpdateManyMutationInputSchema),
                z.lazy(() => LeadSocialProfileUncheckedUpdateManyWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadSocialProfileUpdateManyWithWhereWithoutLeadInputSchema
