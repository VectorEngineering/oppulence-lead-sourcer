import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutExternalSystemsInputSchema } from './LeadUpdateWithoutExternalSystemsInputSchema'
import { LeadUncheckedUpdateWithoutExternalSystemsInputSchema } from './LeadUncheckedUpdateWithoutExternalSystemsInputSchema'

export const LeadUpdateToOneWithWhereWithoutExternalSystemsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutExternalSystemsInput> =
    z
        .object({
            where: z.lazy(() => LeadWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadUpdateWithoutExternalSystemsInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutExternalSystemsInputSchema)
            ])
        })
        .strict()

export default LeadUpdateToOneWithWhereWithoutExternalSystemsInputSchema
