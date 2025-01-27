import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutRequirementsInputSchema } from './LeadUpdateWithoutRequirementsInputSchema'
import { LeadUncheckedUpdateWithoutRequirementsInputSchema } from './LeadUncheckedUpdateWithoutRequirementsInputSchema'

export const LeadUpdateToOneWithWhereWithoutRequirementsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutRequirementsInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => LeadUpdateWithoutRequirementsInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutRequirementsInputSchema)
        ])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutRequirementsInputSchema
