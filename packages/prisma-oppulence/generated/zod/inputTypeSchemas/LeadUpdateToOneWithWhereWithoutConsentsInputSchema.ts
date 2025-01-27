import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutConsentsInputSchema } from './LeadUpdateWithoutConsentsInputSchema'
import { LeadUncheckedUpdateWithoutConsentsInputSchema } from './LeadUncheckedUpdateWithoutConsentsInputSchema'

export const LeadUpdateToOneWithWhereWithoutConsentsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutConsentsInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutConsentsInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutConsentsInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutConsentsInputSchema
