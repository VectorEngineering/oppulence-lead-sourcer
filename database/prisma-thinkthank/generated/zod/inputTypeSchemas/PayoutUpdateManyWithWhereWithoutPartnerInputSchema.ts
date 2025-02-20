import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutScalarWhereInputSchema } from './PayoutScalarWhereInputSchema'
import { PayoutUpdateManyMutationInputSchema } from './PayoutUpdateManyMutationInputSchema'
import { PayoutUncheckedUpdateManyWithoutPartnerInputSchema } from './PayoutUncheckedUpdateManyWithoutPartnerInputSchema'

export const PayoutUpdateManyWithWhereWithoutPartnerInputSchema: z.ZodType<Prisma.PayoutUpdateManyWithWhereWithoutPartnerInput> = z
    .object({
        where: z.lazy(() => PayoutScalarWhereInputSchema),
        data: z.union([z.lazy(() => PayoutUpdateManyMutationInputSchema), z.lazy(() => PayoutUncheckedUpdateManyWithoutPartnerInputSchema)])
    })
    .strict()

export default PayoutUpdateManyWithWhereWithoutPartnerInputSchema
