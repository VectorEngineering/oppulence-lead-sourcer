import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema'
import { PartnerUserUpdateWithoutUserInputSchema } from './PartnerUserUpdateWithoutUserInputSchema'
import { PartnerUserUncheckedUpdateWithoutUserInputSchema } from './PartnerUserUncheckedUpdateWithoutUserInputSchema'

export const PartnerUserUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PartnerUserUpdateWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => PartnerUserWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => PartnerUserUpdateWithoutUserInputSchema),
            z.lazy(() => PartnerUserUncheckedUpdateWithoutUserInputSchema)
        ])
    })
    .strict()

export default PartnerUserUpdateWithWhereUniqueWithoutUserInputSchema
