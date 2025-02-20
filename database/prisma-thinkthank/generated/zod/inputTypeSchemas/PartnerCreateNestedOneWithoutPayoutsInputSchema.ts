import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerCreateWithoutPayoutsInputSchema } from './PartnerCreateWithoutPayoutsInputSchema'
import { PartnerUncheckedCreateWithoutPayoutsInputSchema } from './PartnerUncheckedCreateWithoutPayoutsInputSchema'
import { PartnerCreateOrConnectWithoutPayoutsInputSchema } from './PartnerCreateOrConnectWithoutPayoutsInputSchema'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'

export const PartnerCreateNestedOneWithoutPayoutsInputSchema: z.ZodType<Prisma.PartnerCreateNestedOneWithoutPayoutsInput> = z
    .object({
        create: z
            .union([z.lazy(() => PartnerCreateWithoutPayoutsInputSchema), z.lazy(() => PartnerUncheckedCreateWithoutPayoutsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutPayoutsInputSchema).optional(),
        connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional()
    })
    .strict()

export default PartnerCreateNestedOneWithoutPayoutsInputSchema
