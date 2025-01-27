import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutCommentsInputSchema } from './LeadUpdateWithoutCommentsInputSchema'
import { LeadUncheckedUpdateWithoutCommentsInputSchema } from './LeadUncheckedUpdateWithoutCommentsInputSchema'

export const LeadUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutCommentsInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutCommentsInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutCommentsInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutCommentsInputSchema
