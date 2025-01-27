import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerInviteWhereUniqueInputSchema } from './PartnerInviteWhereUniqueInputSchema'
import { PartnerInviteUpdateWithoutPartnerInputSchema } from './PartnerInviteUpdateWithoutPartnerInputSchema'
import { PartnerInviteUncheckedUpdateWithoutPartnerInputSchema } from './PartnerInviteUncheckedUpdateWithoutPartnerInputSchema'

export const PartnerInviteUpdateWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerInviteUpdateWithWhereUniqueWithoutPartnerInput> =
    z
        .object({
            where: z.lazy(() => PartnerInviteWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => PartnerInviteUpdateWithoutPartnerInputSchema),
                z.lazy(() => PartnerInviteUncheckedUpdateWithoutPartnerInputSchema)
            ])
        })
        .strict()

export default PartnerInviteUpdateWithWhereUniqueWithoutPartnerInputSchema
