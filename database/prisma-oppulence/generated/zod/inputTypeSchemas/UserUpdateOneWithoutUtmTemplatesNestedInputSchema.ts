import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutUtmTemplatesInputSchema } from './UserCreateWithoutUtmTemplatesInputSchema'
import { UserUncheckedCreateWithoutUtmTemplatesInputSchema } from './UserUncheckedCreateWithoutUtmTemplatesInputSchema'
import { UserCreateOrConnectWithoutUtmTemplatesInputSchema } from './UserCreateOrConnectWithoutUtmTemplatesInputSchema'
import { UserUpsertWithoutUtmTemplatesInputSchema } from './UserUpsertWithoutUtmTemplatesInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutUtmTemplatesInputSchema } from './UserUpdateToOneWithWhereWithoutUtmTemplatesInputSchema'
import { UserUpdateWithoutUtmTemplatesInputSchema } from './UserUpdateWithoutUtmTemplatesInputSchema'
import { UserUncheckedUpdateWithoutUtmTemplatesInputSchema } from './UserUncheckedUpdateWithoutUtmTemplatesInputSchema'

export const UserUpdateOneWithoutUtmTemplatesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutUtmTemplatesNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutUtmTemplatesInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutUtmTemplatesInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUtmTemplatesInputSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutUtmTemplatesInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => UserWhereInputSchema)]).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutUtmTemplatesInputSchema),
                z.lazy(() => UserUpdateWithoutUtmTemplatesInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutUtmTemplatesInputSchema)
            ])
            .optional()
    })
    .strict()

export default UserUpdateOneWithoutUtmTemplatesNestedInputSchema
