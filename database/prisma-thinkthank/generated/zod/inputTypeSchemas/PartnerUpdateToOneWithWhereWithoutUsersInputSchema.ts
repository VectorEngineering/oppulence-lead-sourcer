import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'
import { PartnerUpdateWithoutUsersInputSchema } from './PartnerUpdateWithoutUsersInputSchema'
import { PartnerUncheckedUpdateWithoutUsersInputSchema } from './PartnerUncheckedUpdateWithoutUsersInputSchema'

export const PartnerUpdateToOneWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.PartnerUpdateToOneWithWhereWithoutUsersInput> = z
    .object({
        where: z.lazy(() => PartnerWhereInputSchema).optional(),
        data: z.union([z.lazy(() => PartnerUpdateWithoutUsersInputSchema), z.lazy(() => PartnerUncheckedUpdateWithoutUsersInputSchema)])
    })
    .strict()

export default PartnerUpdateToOneWithWhereWithoutUsersInputSchema
