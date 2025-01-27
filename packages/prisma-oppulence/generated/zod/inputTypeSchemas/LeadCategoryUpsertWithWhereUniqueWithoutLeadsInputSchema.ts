import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema'
import { LeadCategoryUpdateWithoutLeadsInputSchema } from './LeadCategoryUpdateWithoutLeadsInputSchema'
import { LeadCategoryUncheckedUpdateWithoutLeadsInputSchema } from './LeadCategoryUncheckedUpdateWithoutLeadsInputSchema'
import { LeadCategoryCreateWithoutLeadsInputSchema } from './LeadCategoryCreateWithoutLeadsInputSchema'
import { LeadCategoryUncheckedCreateWithoutLeadsInputSchema } from './LeadCategoryUncheckedCreateWithoutLeadsInputSchema'

export const LeadCategoryUpsertWithWhereUniqueWithoutLeadsInputSchema: z.ZodType<Prisma.LeadCategoryUpsertWithWhereUniqueWithoutLeadsInput> =
    z
        .object({
            where: z.lazy(() => LeadCategoryWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadCategoryUpdateWithoutLeadsInputSchema),
                z.lazy(() => LeadCategoryUncheckedUpdateWithoutLeadsInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadCategoryCreateWithoutLeadsInputSchema),
                z.lazy(() => LeadCategoryUncheckedCreateWithoutLeadsInputSchema)
            ])
        })
        .strict()

export default LeadCategoryUpsertWithWhereUniqueWithoutLeadsInputSchema
