import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUpdateWithoutApplicationsInputSchema } from './PartnerUpdateWithoutApplicationsInputSchema'
import { PartnerUncheckedUpdateWithoutApplicationsInputSchema } from './PartnerUncheckedUpdateWithoutApplicationsInputSchema'
import { PartnerCreateWithoutApplicationsInputSchema } from './PartnerCreateWithoutApplicationsInputSchema'
import { PartnerUncheckedCreateWithoutApplicationsInputSchema } from './PartnerUncheckedCreateWithoutApplicationsInputSchema'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'

export const PartnerUpsertWithoutApplicationsInputSchema: z.ZodType<Prisma.PartnerUpsertWithoutApplicationsInput> = z
    .object({
        update: z.union([
            z.lazy(() => PartnerUpdateWithoutApplicationsInputSchema),
            z.lazy(() => PartnerUncheckedUpdateWithoutApplicationsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PartnerCreateWithoutApplicationsInputSchema),
            z.lazy(() => PartnerUncheckedCreateWithoutApplicationsInputSchema)
        ]),
        where: z.lazy(() => PartnerWhereInputSchema).optional()
    })
    .strict()

export default PartnerUpsertWithoutApplicationsInputSchema
