import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'
import { PartnerUpdateWithoutPayoutsInputSchema } from './PartnerUpdateWithoutPayoutsInputSchema'
import { PartnerUncheckedUpdateWithoutPayoutsInputSchema } from './PartnerUncheckedUpdateWithoutPayoutsInputSchema'

export const PartnerUpdateToOneWithWhereWithoutPayoutsInputSchema: z.ZodType<Prisma.PartnerUpdateToOneWithWhereWithoutPayoutsInput> = z
    .object({
        where: z.lazy(() => PartnerWhereInputSchema).optional(),
        data: z.union([z.lazy(() => PartnerUpdateWithoutPayoutsInputSchema), z.lazy(() => PartnerUncheckedUpdateWithoutPayoutsInputSchema)])
    })
    .strict()

export default PartnerUpdateToOneWithWhereWithoutPayoutsInputSchema
