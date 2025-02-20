import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutUtmTemplatesInputSchema } from './UserUpdateWithoutUtmTemplatesInputSchema'
import { UserUncheckedUpdateWithoutUtmTemplatesInputSchema } from './UserUncheckedUpdateWithoutUtmTemplatesInputSchema'
import { UserCreateWithoutUtmTemplatesInputSchema } from './UserCreateWithoutUtmTemplatesInputSchema'
import { UserUncheckedCreateWithoutUtmTemplatesInputSchema } from './UserUncheckedCreateWithoutUtmTemplatesInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutUtmTemplatesInputSchema: z.ZodType<Prisma.UserUpsertWithoutUtmTemplatesInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutUtmTemplatesInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutUtmTemplatesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutUtmTemplatesInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutUtmTemplatesInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutUtmTemplatesInputSchema
