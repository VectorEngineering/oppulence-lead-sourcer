import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUpdateWithoutPayoutsInputSchema } from './PartnerUpdateWithoutPayoutsInputSchema'
import { PartnerUncheckedUpdateWithoutPayoutsInputSchema } from './PartnerUncheckedUpdateWithoutPayoutsInputSchema'
import { PartnerCreateWithoutPayoutsInputSchema } from './PartnerCreateWithoutPayoutsInputSchema'
import { PartnerUncheckedCreateWithoutPayoutsInputSchema } from './PartnerUncheckedCreateWithoutPayoutsInputSchema'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'

export const PartnerUpsertWithoutPayoutsInputSchema: z.ZodType<Prisma.PartnerUpsertWithoutPayoutsInput> = z
    .object({
        update: z.union([
            z.lazy(() => PartnerUpdateWithoutPayoutsInputSchema),
            z.lazy(() => PartnerUncheckedUpdateWithoutPayoutsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PartnerCreateWithoutPayoutsInputSchema),
            z.lazy(() => PartnerUncheckedCreateWithoutPayoutsInputSchema)
        ]),
        where: z.lazy(() => PartnerWhereInputSchema).optional()
    })
    .strict()

export default PartnerUpsertWithoutPayoutsInputSchema
