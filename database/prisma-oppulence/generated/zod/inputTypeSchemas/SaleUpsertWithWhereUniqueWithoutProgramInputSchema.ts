import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema'
import { SaleUpdateWithoutProgramInputSchema } from './SaleUpdateWithoutProgramInputSchema'
import { SaleUncheckedUpdateWithoutProgramInputSchema } from './SaleUncheckedUpdateWithoutProgramInputSchema'
import { SaleCreateWithoutProgramInputSchema } from './SaleCreateWithoutProgramInputSchema'
import { SaleUncheckedCreateWithoutProgramInputSchema } from './SaleUncheckedCreateWithoutProgramInputSchema'

export const SaleUpsertWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutProgramInput> = z
    .object({
        where: z.lazy(() => SaleWhereUniqueInputSchema),
        update: z.union([z.lazy(() => SaleUpdateWithoutProgramInputSchema), z.lazy(() => SaleUncheckedUpdateWithoutProgramInputSchema)]),
        create: z.union([z.lazy(() => SaleCreateWithoutProgramInputSchema), z.lazy(() => SaleUncheckedCreateWithoutProgramInputSchema)])
    })
    .strict()

export default SaleUpsertWithWhereUniqueWithoutProgramInputSchema
