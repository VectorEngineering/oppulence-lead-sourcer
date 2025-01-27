import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUpdateWithoutInvitesInputSchema } from './PartnerUpdateWithoutInvitesInputSchema'
import { PartnerUncheckedUpdateWithoutInvitesInputSchema } from './PartnerUncheckedUpdateWithoutInvitesInputSchema'
import { PartnerCreateWithoutInvitesInputSchema } from './PartnerCreateWithoutInvitesInputSchema'
import { PartnerUncheckedCreateWithoutInvitesInputSchema } from './PartnerUncheckedCreateWithoutInvitesInputSchema'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'

export const PartnerUpsertWithoutInvitesInputSchema: z.ZodType<Prisma.PartnerUpsertWithoutInvitesInput> = z
    .object({
        update: z.union([
            z.lazy(() => PartnerUpdateWithoutInvitesInputSchema),
            z.lazy(() => PartnerUncheckedUpdateWithoutInvitesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PartnerCreateWithoutInvitesInputSchema),
            z.lazy(() => PartnerUncheckedCreateWithoutInvitesInputSchema)
        ]),
        where: z.lazy(() => PartnerWhereInputSchema).optional()
    })
    .strict()

export default PartnerUpsertWithoutInvitesInputSchema
