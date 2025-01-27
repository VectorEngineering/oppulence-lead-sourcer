import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUpdateWithoutUsersInputSchema } from './PartnerUpdateWithoutUsersInputSchema'
import { PartnerUncheckedUpdateWithoutUsersInputSchema } from './PartnerUncheckedUpdateWithoutUsersInputSchema'
import { PartnerCreateWithoutUsersInputSchema } from './PartnerCreateWithoutUsersInputSchema'
import { PartnerUncheckedCreateWithoutUsersInputSchema } from './PartnerUncheckedCreateWithoutUsersInputSchema'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'

export const PartnerUpsertWithoutUsersInputSchema: z.ZodType<Prisma.PartnerUpsertWithoutUsersInput> = z
    .object({
        update: z.union([z.lazy(() => PartnerUpdateWithoutUsersInputSchema), z.lazy(() => PartnerUncheckedUpdateWithoutUsersInputSchema)]),
        create: z.union([z.lazy(() => PartnerCreateWithoutUsersInputSchema), z.lazy(() => PartnerUncheckedCreateWithoutUsersInputSchema)]),
        where: z.lazy(() => PartnerWhereInputSchema).optional()
    })
    .strict()

export default PartnerUpsertWithoutUsersInputSchema
