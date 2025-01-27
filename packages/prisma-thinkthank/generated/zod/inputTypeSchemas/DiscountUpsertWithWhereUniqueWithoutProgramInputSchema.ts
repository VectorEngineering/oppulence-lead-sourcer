import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema'
import { DiscountUpdateWithoutProgramInputSchema } from './DiscountUpdateWithoutProgramInputSchema'
import { DiscountUncheckedUpdateWithoutProgramInputSchema } from './DiscountUncheckedUpdateWithoutProgramInputSchema'
import { DiscountCreateWithoutProgramInputSchema } from './DiscountCreateWithoutProgramInputSchema'
import { DiscountUncheckedCreateWithoutProgramInputSchema } from './DiscountUncheckedCreateWithoutProgramInputSchema'

export const DiscountUpsertWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.DiscountUpsertWithWhereUniqueWithoutProgramInput> = z
    .object({
        where: z.lazy(() => DiscountWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => DiscountUpdateWithoutProgramInputSchema),
            z.lazy(() => DiscountUncheckedUpdateWithoutProgramInputSchema)
        ]),
        create: z.union([
            z.lazy(() => DiscountCreateWithoutProgramInputSchema),
            z.lazy(() => DiscountUncheckedCreateWithoutProgramInputSchema)
        ])
    })
    .strict()

export default DiscountUpsertWithWhereUniqueWithoutProgramInputSchema
