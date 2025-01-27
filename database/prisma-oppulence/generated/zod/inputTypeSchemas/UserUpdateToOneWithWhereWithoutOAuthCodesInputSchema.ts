import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutOAuthCodesInputSchema } from './UserUpdateWithoutOAuthCodesInputSchema'
import { UserUncheckedUpdateWithoutOAuthCodesInputSchema } from './UserUncheckedUpdateWithoutOAuthCodesInputSchema'

export const UserUpdateToOneWithWhereWithoutOAuthCodesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOAuthCodesInput> = z
    .object({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([z.lazy(() => UserUpdateWithoutOAuthCodesInputSchema), z.lazy(() => UserUncheckedUpdateWithoutOAuthCodesInputSchema)])
    })
    .strict()

export default UserUpdateToOneWithWhereWithoutOAuthCodesInputSchema
