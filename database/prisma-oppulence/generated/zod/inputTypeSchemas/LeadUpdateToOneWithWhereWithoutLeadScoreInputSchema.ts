import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutLeadScoreInputSchema } from './LeadUpdateWithoutLeadScoreInputSchema'
import { LeadUncheckedUpdateWithoutLeadScoreInputSchema } from './LeadUncheckedUpdateWithoutLeadScoreInputSchema'

export const LeadUpdateToOneWithWhereWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLeadScoreInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutLeadScoreInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutLeadScoreInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutLeadScoreInputSchema
