import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutDealsInputSchema } from './LeadUpdateWithoutDealsInputSchema'
import { LeadUncheckedUpdateWithoutDealsInputSchema } from './LeadUncheckedUpdateWithoutDealsInputSchema'

export const LeadUpdateToOneWithWhereWithoutDealsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutDealsInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutDealsInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutDealsInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutDealsInputSchema
