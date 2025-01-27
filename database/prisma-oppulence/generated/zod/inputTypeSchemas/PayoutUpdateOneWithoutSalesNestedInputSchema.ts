import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutCreateWithoutSalesInputSchema } from './PayoutCreateWithoutSalesInputSchema'
import { PayoutUncheckedCreateWithoutSalesInputSchema } from './PayoutUncheckedCreateWithoutSalesInputSchema'
import { PayoutCreateOrConnectWithoutSalesInputSchema } from './PayoutCreateOrConnectWithoutSalesInputSchema'
import { PayoutUpsertWithoutSalesInputSchema } from './PayoutUpsertWithoutSalesInputSchema'
import { PayoutWhereInputSchema } from './PayoutWhereInputSchema'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'
import { PayoutUpdateToOneWithWhereWithoutSalesInputSchema } from './PayoutUpdateToOneWithWhereWithoutSalesInputSchema'
import { PayoutUpdateWithoutSalesInputSchema } from './PayoutUpdateWithoutSalesInputSchema'
import { PayoutUncheckedUpdateWithoutSalesInputSchema } from './PayoutUncheckedUpdateWithoutSalesInputSchema'

export const PayoutUpdateOneWithoutSalesNestedInputSchema: z.ZodType<Prisma.PayoutUpdateOneWithoutSalesNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => PayoutCreateWithoutSalesInputSchema), z.lazy(() => PayoutUncheckedCreateWithoutSalesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PayoutCreateOrConnectWithoutSalesInputSchema).optional(),
        upsert: z.lazy(() => PayoutUpsertWithoutSalesInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => PayoutWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => PayoutWhereInputSchema)]).optional(),
        connect: z.lazy(() => PayoutWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => PayoutUpdateToOneWithWhereWithoutSalesInputSchema),
                z.lazy(() => PayoutUpdateWithoutSalesInputSchema),
                z.lazy(() => PayoutUncheckedUpdateWithoutSalesInputSchema)
            ])
            .optional()
    })
    .strict()

export default PayoutUpdateOneWithoutSalesNestedInputSchema
