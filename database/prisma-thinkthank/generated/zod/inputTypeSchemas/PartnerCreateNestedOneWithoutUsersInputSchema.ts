import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerCreateWithoutUsersInputSchema } from './PartnerCreateWithoutUsersInputSchema'
import { PartnerUncheckedCreateWithoutUsersInputSchema } from './PartnerUncheckedCreateWithoutUsersInputSchema'
import { PartnerCreateOrConnectWithoutUsersInputSchema } from './PartnerCreateOrConnectWithoutUsersInputSchema'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'

export const PartnerCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.PartnerCreateNestedOneWithoutUsersInput> = z
    .object({
        create: z
            .union([z.lazy(() => PartnerCreateWithoutUsersInputSchema), z.lazy(() => PartnerUncheckedCreateWithoutUsersInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutUsersInputSchema).optional(),
        connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional()
    })
    .strict()

export default PartnerCreateNestedOneWithoutUsersInputSchema
