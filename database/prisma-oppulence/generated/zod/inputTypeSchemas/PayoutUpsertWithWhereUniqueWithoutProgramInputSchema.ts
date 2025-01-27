import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'
import { PayoutUpdateWithoutProgramInputSchema } from './PayoutUpdateWithoutProgramInputSchema'
import { PayoutUncheckedUpdateWithoutProgramInputSchema } from './PayoutUncheckedUpdateWithoutProgramInputSchema'
import { PayoutCreateWithoutProgramInputSchema } from './PayoutCreateWithoutProgramInputSchema'
import { PayoutUncheckedCreateWithoutProgramInputSchema } from './PayoutUncheckedCreateWithoutProgramInputSchema'

export const PayoutUpsertWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.PayoutUpsertWithWhereUniqueWithoutProgramInput> = z
    .object({
        where: z.lazy(() => PayoutWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => PayoutUpdateWithoutProgramInputSchema),
            z.lazy(() => PayoutUncheckedUpdateWithoutProgramInputSchema)
        ]),
        create: z.union([z.lazy(() => PayoutCreateWithoutProgramInputSchema), z.lazy(() => PayoutUncheckedCreateWithoutProgramInputSchema)])
    })
    .strict()

export default PayoutUpsertWithWhereUniqueWithoutProgramInputSchema
