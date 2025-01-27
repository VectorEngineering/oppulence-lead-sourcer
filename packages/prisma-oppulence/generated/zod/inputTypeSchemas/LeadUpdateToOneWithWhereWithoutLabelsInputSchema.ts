import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutLabelsInputSchema } from './LeadUpdateWithoutLabelsInputSchema'
import { LeadUncheckedUpdateWithoutLabelsInputSchema } from './LeadUncheckedUpdateWithoutLabelsInputSchema'

export const LeadUpdateToOneWithWhereWithoutLabelsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLabelsInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutLabelsInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutLabelsInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutLabelsInputSchema
