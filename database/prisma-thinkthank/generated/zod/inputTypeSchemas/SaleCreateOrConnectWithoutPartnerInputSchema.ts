import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema'
import { SaleCreateWithoutPartnerInputSchema } from './SaleCreateWithoutPartnerInputSchema'
import { SaleUncheckedCreateWithoutPartnerInputSchema } from './SaleUncheckedCreateWithoutPartnerInputSchema'

export const SaleCreateOrConnectWithoutPartnerInputSchema: z.ZodType<Prisma.SaleCreateOrConnectWithoutPartnerInput> = z
    .object({
        where: z.lazy(() => SaleWhereUniqueInputSchema),
        create: z.union([z.lazy(() => SaleCreateWithoutPartnerInputSchema), z.lazy(() => SaleUncheckedCreateWithoutPartnerInputSchema)])
    })
    .strict()

export default SaleCreateOrConnectWithoutPartnerInputSchema
