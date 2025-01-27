import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'
import { PartnerCreateWithoutInvitesInputSchema } from './PartnerCreateWithoutInvitesInputSchema'
import { PartnerUncheckedCreateWithoutInvitesInputSchema } from './PartnerUncheckedCreateWithoutInvitesInputSchema'

export const PartnerCreateOrConnectWithoutInvitesInputSchema: z.ZodType<Prisma.PartnerCreateOrConnectWithoutInvitesInput> = z
    .object({
        where: z.lazy(() => PartnerWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => PartnerCreateWithoutInvitesInputSchema),
            z.lazy(() => PartnerUncheckedCreateWithoutInvitesInputSchema)
        ])
    })
    .strict()

export default PartnerCreateOrConnectWithoutInvitesInputSchema
