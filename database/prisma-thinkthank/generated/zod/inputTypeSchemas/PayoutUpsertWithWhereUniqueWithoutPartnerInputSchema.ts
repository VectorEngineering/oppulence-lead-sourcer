import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'
import { PayoutUpdateWithoutPartnerInputSchema } from './PayoutUpdateWithoutPartnerInputSchema'
import { PayoutUncheckedUpdateWithoutPartnerInputSchema } from './PayoutUncheckedUpdateWithoutPartnerInputSchema'
import { PayoutCreateWithoutPartnerInputSchema } from './PayoutCreateWithoutPartnerInputSchema'
import { PayoutUncheckedCreateWithoutPartnerInputSchema } from './PayoutUncheckedCreateWithoutPartnerInputSchema'

export const PayoutUpsertWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.PayoutUpsertWithWhereUniqueWithoutPartnerInput> = z
    .object({
        where: z.lazy(() => PayoutWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => PayoutUpdateWithoutPartnerInputSchema),
            z.lazy(() => PayoutUncheckedUpdateWithoutPartnerInputSchema)
        ]),
        create: z.union([z.lazy(() => PayoutCreateWithoutPartnerInputSchema), z.lazy(() => PayoutUncheckedCreateWithoutPartnerInputSchema)])
    })
    .strict()

export default PayoutUpsertWithWhereUniqueWithoutPartnerInputSchema
