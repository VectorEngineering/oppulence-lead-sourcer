import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema'
import { PartnerUserUpdateWithoutPartnerInputSchema } from './PartnerUserUpdateWithoutPartnerInputSchema'
import { PartnerUserUncheckedUpdateWithoutPartnerInputSchema } from './PartnerUserUncheckedUpdateWithoutPartnerInputSchema'

export const PartnerUserUpdateWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerUserUpdateWithWhereUniqueWithoutPartnerInput> =
    z
        .object({
            where: z.lazy(() => PartnerUserWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => PartnerUserUpdateWithoutPartnerInputSchema),
                z.lazy(() => PartnerUserUncheckedUpdateWithoutPartnerInputSchema)
            ])
        })
        .strict()

export default PartnerUserUpdateWithWhereUniqueWithoutPartnerInputSchema
