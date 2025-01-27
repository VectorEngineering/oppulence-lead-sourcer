import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutUtmTemplatesInputSchema } from './UserUpdateWithoutUtmTemplatesInputSchema'
import { UserUncheckedUpdateWithoutUtmTemplatesInputSchema } from './UserUncheckedUpdateWithoutUtmTemplatesInputSchema'

export const UserUpdateToOneWithWhereWithoutUtmTemplatesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUtmTemplatesInput> = z
    .object({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutUtmTemplatesInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutUtmTemplatesInputSchema)
        ])
    })
    .strict()

export default UserUpdateToOneWithWhereWithoutUtmTemplatesInputSchema
