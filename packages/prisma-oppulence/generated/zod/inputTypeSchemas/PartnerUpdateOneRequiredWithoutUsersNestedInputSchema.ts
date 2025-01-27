import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerCreateWithoutUsersInputSchema } from './PartnerCreateWithoutUsersInputSchema'
import { PartnerUncheckedCreateWithoutUsersInputSchema } from './PartnerUncheckedCreateWithoutUsersInputSchema'
import { PartnerCreateOrConnectWithoutUsersInputSchema } from './PartnerCreateOrConnectWithoutUsersInputSchema'
import { PartnerUpsertWithoutUsersInputSchema } from './PartnerUpsertWithoutUsersInputSchema'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'
import { PartnerUpdateToOneWithWhereWithoutUsersInputSchema } from './PartnerUpdateToOneWithWhereWithoutUsersInputSchema'
import { PartnerUpdateWithoutUsersInputSchema } from './PartnerUpdateWithoutUsersInputSchema'
import { PartnerUncheckedUpdateWithoutUsersInputSchema } from './PartnerUncheckedUpdateWithoutUsersInputSchema'

export const PartnerUpdateOneRequiredWithoutUsersNestedInputSchema: z.ZodType<Prisma.PartnerUpdateOneRequiredWithoutUsersNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => PartnerCreateWithoutUsersInputSchema), z.lazy(() => PartnerUncheckedCreateWithoutUsersInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutUsersInputSchema).optional(),
        upsert: z.lazy(() => PartnerUpsertWithoutUsersInputSchema).optional(),
        connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => PartnerUpdateToOneWithWhereWithoutUsersInputSchema),
                z.lazy(() => PartnerUpdateWithoutUsersInputSchema),
                z.lazy(() => PartnerUncheckedUpdateWithoutUsersInputSchema)
            ])
            .optional()
    })
    .strict()

export default PartnerUpdateOneRequiredWithoutUsersNestedInputSchema
