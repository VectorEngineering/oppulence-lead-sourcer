import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutCategoriesInputSchema } from './LeadCreateWithoutCategoriesInputSchema'
import { LeadUncheckedCreateWithoutCategoriesInputSchema } from './LeadUncheckedCreateWithoutCategoriesInputSchema'

export const LeadCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutCategoriesInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadCreateWithoutCategoriesInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutCategoriesInputSchema)
        ])
    })
    .strict()

export default LeadCreateOrConnectWithoutCategoriesInputSchema
