import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithoutCategoriesInputSchema } from './LeadUpdateWithoutCategoriesInputSchema'
import { LeadUncheckedUpdateWithoutCategoriesInputSchema } from './LeadUncheckedUpdateWithoutCategoriesInputSchema'
import { LeadCreateWithoutCategoriesInputSchema } from './LeadCreateWithoutCategoriesInputSchema'
import { LeadUncheckedCreateWithoutCategoriesInputSchema } from './LeadUncheckedCreateWithoutCategoriesInputSchema'

export const LeadUpsertWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.LeadUpsertWithWhereUniqueWithoutCategoriesInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => LeadUpdateWithoutCategoriesInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutCategoriesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadCreateWithoutCategoriesInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutCategoriesInputSchema)
        ])
    })
    .strict()

export default LeadUpsertWithWhereUniqueWithoutCategoriesInputSchema
