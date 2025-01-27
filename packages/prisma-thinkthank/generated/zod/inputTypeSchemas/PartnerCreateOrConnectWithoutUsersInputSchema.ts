import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'
import { PartnerCreateWithoutUsersInputSchema } from './PartnerCreateWithoutUsersInputSchema'
import { PartnerUncheckedCreateWithoutUsersInputSchema } from './PartnerUncheckedCreateWithoutUsersInputSchema'

export const PartnerCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.PartnerCreateOrConnectWithoutUsersInput> = z
    .object({
        where: z.lazy(() => PartnerWhereUniqueInputSchema),
        create: z.union([z.lazy(() => PartnerCreateWithoutUsersInputSchema), z.lazy(() => PartnerUncheckedCreateWithoutUsersInputSchema)])
    })
    .strict()

export default PartnerCreateOrConnectWithoutUsersInputSchema
