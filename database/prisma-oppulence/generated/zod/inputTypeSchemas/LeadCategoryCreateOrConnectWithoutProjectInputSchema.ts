import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema'
import { LeadCategoryCreateWithoutProjectInputSchema } from './LeadCategoryCreateWithoutProjectInputSchema'
import { LeadCategoryUncheckedCreateWithoutProjectInputSchema } from './LeadCategoryUncheckedCreateWithoutProjectInputSchema'

export const LeadCategoryCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.LeadCategoryCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => LeadCategoryWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadCategoryCreateWithoutProjectInputSchema),
            z.lazy(() => LeadCategoryUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default LeadCategoryCreateOrConnectWithoutProjectInputSchema
