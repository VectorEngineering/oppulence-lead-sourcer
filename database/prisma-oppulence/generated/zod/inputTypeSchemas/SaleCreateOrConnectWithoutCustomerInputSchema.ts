import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema'
import { SaleCreateWithoutCustomerInputSchema } from './SaleCreateWithoutCustomerInputSchema'
import { SaleUncheckedCreateWithoutCustomerInputSchema } from './SaleUncheckedCreateWithoutCustomerInputSchema'

export const SaleCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.SaleCreateOrConnectWithoutCustomerInput> = z
    .object({
        where: z.lazy(() => SaleWhereUniqueInputSchema),
        create: z.union([z.lazy(() => SaleCreateWithoutCustomerInputSchema), z.lazy(() => SaleUncheckedCreateWithoutCustomerInputSchema)])
    })
    .strict()

export default SaleCreateOrConnectWithoutCustomerInputSchema
