import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutSocialProfilesInputSchema } from './LeadUpdateWithoutSocialProfilesInputSchema'
import { LeadUncheckedUpdateWithoutSocialProfilesInputSchema } from './LeadUncheckedUpdateWithoutSocialProfilesInputSchema'

export const LeadUpdateToOneWithWhereWithoutSocialProfilesInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutSocialProfilesInput> =
    z
        .object({
            where: z.lazy(() => LeadWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadUpdateWithoutSocialProfilesInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutSocialProfilesInputSchema)
            ])
        })
        .strict()

export default LeadUpdateToOneWithWhereWithoutSocialProfilesInputSchema
