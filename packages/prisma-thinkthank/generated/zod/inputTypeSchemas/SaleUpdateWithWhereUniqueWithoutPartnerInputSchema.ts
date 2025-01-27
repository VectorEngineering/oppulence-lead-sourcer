import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema'
import { SaleUpdateWithoutPartnerInputSchema } from './SaleUpdateWithoutPartnerInputSchema'
import { SaleUncheckedUpdateWithoutPartnerInputSchema } from './SaleUncheckedUpdateWithoutPartnerInputSchema'

export const SaleUpdateWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutPartnerInput> = z
    .object({
        where: z.lazy(() => SaleWhereUniqueInputSchema),
        data: z.union([z.lazy(() => SaleUpdateWithoutPartnerInputSchema), z.lazy(() => SaleUncheckedUpdateWithoutPartnerInputSchema)])
    })
    .strict()

export default SaleUpdateWithWhereUniqueWithoutPartnerInputSchema
