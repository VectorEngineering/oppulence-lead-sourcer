import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutTimelinesInputSchema } from './LeadUpdateWithoutTimelinesInputSchema'
import { LeadUncheckedUpdateWithoutTimelinesInputSchema } from './LeadUncheckedUpdateWithoutTimelinesInputSchema'

export const LeadUpdateToOneWithWhereWithoutTimelinesInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutTimelinesInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutTimelinesInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutTimelinesInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutTimelinesInputSchema
