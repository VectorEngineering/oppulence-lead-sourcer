import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema'
import { LeadCategoryUpdateWithoutLeadsInputSchema } from './LeadCategoryUpdateWithoutLeadsInputSchema'
import { LeadCategoryUncheckedUpdateWithoutLeadsInputSchema } from './LeadCategoryUncheckedUpdateWithoutLeadsInputSchema'

export const LeadCategoryUpdateWithWhereUniqueWithoutLeadsInputSchema: z.ZodType<Prisma.LeadCategoryUpdateWithWhereUniqueWithoutLeadsInput> =
    z
        .object({
            where: z.lazy(() => LeadCategoryWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadCategoryUpdateWithoutLeadsInputSchema),
                z.lazy(() => LeadCategoryUncheckedUpdateWithoutLeadsInputSchema)
            ])
        })
        .strict()

export default LeadCategoryUpdateWithWhereUniqueWithoutLeadsInputSchema
