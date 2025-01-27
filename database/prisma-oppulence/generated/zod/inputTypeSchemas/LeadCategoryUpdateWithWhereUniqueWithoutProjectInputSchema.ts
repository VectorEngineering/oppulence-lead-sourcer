import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema'
import { LeadCategoryUpdateWithoutProjectInputSchema } from './LeadCategoryUpdateWithoutProjectInputSchema'
import { LeadCategoryUncheckedUpdateWithoutProjectInputSchema } from './LeadCategoryUncheckedUpdateWithoutProjectInputSchema'

export const LeadCategoryUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.LeadCategoryUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => LeadCategoryWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadCategoryUpdateWithoutProjectInputSchema),
                z.lazy(() => LeadCategoryUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default LeadCategoryUpdateWithWhereUniqueWithoutProjectInputSchema
