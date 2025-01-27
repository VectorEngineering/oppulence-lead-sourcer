import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema'
import { SaleCreateWithoutPayoutInputSchema } from './SaleCreateWithoutPayoutInputSchema'
import { SaleUncheckedCreateWithoutPayoutInputSchema } from './SaleUncheckedCreateWithoutPayoutInputSchema'

export const SaleCreateOrConnectWithoutPayoutInputSchema: z.ZodType<Prisma.SaleCreateOrConnectWithoutPayoutInput> = z
    .object({
        where: z.lazy(() => SaleWhereUniqueInputSchema),
        create: z.union([z.lazy(() => SaleCreateWithoutPayoutInputSchema), z.lazy(() => SaleUncheckedCreateWithoutPayoutInputSchema)])
    })
    .strict()

export default SaleCreateOrConnectWithoutPayoutInputSchema
