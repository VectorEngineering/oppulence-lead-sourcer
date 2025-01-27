import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema'
import { PartnerUserCreateWithoutUserInputSchema } from './PartnerUserCreateWithoutUserInputSchema'
import { PartnerUserUncheckedCreateWithoutUserInputSchema } from './PartnerUserUncheckedCreateWithoutUserInputSchema'

export const PartnerUserCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PartnerUserCreateOrConnectWithoutUserInput> = z
    .object({
        where: z.lazy(() => PartnerUserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => PartnerUserCreateWithoutUserInputSchema),
            z.lazy(() => PartnerUserUncheckedCreateWithoutUserInputSchema)
        ])
    })
    .strict()

export default PartnerUserCreateOrConnectWithoutUserInputSchema
