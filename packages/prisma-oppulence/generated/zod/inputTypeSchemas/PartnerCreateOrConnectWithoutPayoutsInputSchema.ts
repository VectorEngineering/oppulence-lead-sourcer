import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'
import { PartnerCreateWithoutPayoutsInputSchema } from './PartnerCreateWithoutPayoutsInputSchema'
import { PartnerUncheckedCreateWithoutPayoutsInputSchema } from './PartnerUncheckedCreateWithoutPayoutsInputSchema'

export const PartnerCreateOrConnectWithoutPayoutsInputSchema: z.ZodType<Prisma.PartnerCreateOrConnectWithoutPayoutsInput> = z
    .object({
        where: z.lazy(() => PartnerWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => PartnerCreateWithoutPayoutsInputSchema),
            z.lazy(() => PartnerUncheckedCreateWithoutPayoutsInputSchema)
        ])
    })
    .strict()

export default PartnerCreateOrConnectWithoutPayoutsInputSchema
