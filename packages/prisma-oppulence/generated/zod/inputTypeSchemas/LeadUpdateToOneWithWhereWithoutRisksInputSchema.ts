import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutRisksInputSchema } from './LeadUpdateWithoutRisksInputSchema'
import { LeadUncheckedUpdateWithoutRisksInputSchema } from './LeadUncheckedUpdateWithoutRisksInputSchema'

export const LeadUpdateToOneWithWhereWithoutRisksInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutRisksInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutRisksInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutRisksInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutRisksInputSchema
