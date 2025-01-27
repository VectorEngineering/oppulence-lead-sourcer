import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema'
import { PartnerUserUpdateWithoutUserInputSchema } from './PartnerUserUpdateWithoutUserInputSchema'
import { PartnerUserUncheckedUpdateWithoutUserInputSchema } from './PartnerUserUncheckedUpdateWithoutUserInputSchema'
import { PartnerUserCreateWithoutUserInputSchema } from './PartnerUserCreateWithoutUserInputSchema'
import { PartnerUserUncheckedCreateWithoutUserInputSchema } from './PartnerUserUncheckedCreateWithoutUserInputSchema'

export const PartnerUserUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PartnerUserUpsertWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => PartnerUserWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => PartnerUserUpdateWithoutUserInputSchema),
            z.lazy(() => PartnerUserUncheckedUpdateWithoutUserInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PartnerUserCreateWithoutUserInputSchema),
            z.lazy(() => PartnerUserUncheckedCreateWithoutUserInputSchema)
        ])
    })
    .strict()

export default PartnerUserUpsertWithWhereUniqueWithoutUserInputSchema
