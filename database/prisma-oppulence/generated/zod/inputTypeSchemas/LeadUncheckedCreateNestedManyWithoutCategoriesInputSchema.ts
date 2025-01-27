import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutCategoriesInputSchema } from './LeadCreateWithoutCategoriesInputSchema'
import { LeadUncheckedCreateWithoutCategoriesInputSchema } from './LeadUncheckedCreateWithoutCategoriesInputSchema'
import { LeadCreateOrConnectWithoutCategoriesInputSchema } from './LeadCreateOrConnectWithoutCategoriesInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadUncheckedCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.LeadUncheckedCreateNestedManyWithoutCategoriesInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCreateWithoutCategoriesInputSchema),
                    z.lazy(() => LeadCreateWithoutCategoriesInputSchema).array(),
                    z.lazy(() => LeadUncheckedCreateWithoutCategoriesInputSchema),
                    z.lazy(() => LeadUncheckedCreateWithoutCategoriesInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadCreateOrConnectWithoutCategoriesInputSchema),
                    z.lazy(() => LeadCreateOrConnectWithoutCategoriesInputSchema).array()
                ])
                .optional(),
            connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default LeadUncheckedCreateNestedManyWithoutCategoriesInputSchema
