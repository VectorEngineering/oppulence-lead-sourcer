import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema'
import { SaleCreateWithoutProgramInputSchema } from './SaleCreateWithoutProgramInputSchema'
import { SaleUncheckedCreateWithoutProgramInputSchema } from './SaleUncheckedCreateWithoutProgramInputSchema'

export const SaleCreateOrConnectWithoutProgramInputSchema: z.ZodType<Prisma.SaleCreateOrConnectWithoutProgramInput> = z
    .object({
        where: z.lazy(() => SaleWhereUniqueInputSchema),
        create: z.union([z.lazy(() => SaleCreateWithoutProgramInputSchema), z.lazy(() => SaleUncheckedCreateWithoutProgramInputSchema)])
    })
    .strict()

export default SaleCreateOrConnectWithoutProgramInputSchema
