import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'
import { PartnerCreateWithoutApplicationsInputSchema } from './PartnerCreateWithoutApplicationsInputSchema'
import { PartnerUncheckedCreateWithoutApplicationsInputSchema } from './PartnerUncheckedCreateWithoutApplicationsInputSchema'

export const PartnerCreateOrConnectWithoutApplicationsInputSchema: z.ZodType<Prisma.PartnerCreateOrConnectWithoutApplicationsInput> = z
    .object({
        where: z.lazy(() => PartnerWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => PartnerCreateWithoutApplicationsInputSchema),
            z.lazy(() => PartnerUncheckedCreateWithoutApplicationsInputSchema)
        ])
    })
    .strict()

export default PartnerCreateOrConnectWithoutApplicationsInputSchema
