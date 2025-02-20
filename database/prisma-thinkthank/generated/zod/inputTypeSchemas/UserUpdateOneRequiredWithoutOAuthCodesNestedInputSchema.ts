import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutOAuthCodesInputSchema } from './UserCreateWithoutOAuthCodesInputSchema'
import { UserUncheckedCreateWithoutOAuthCodesInputSchema } from './UserUncheckedCreateWithoutOAuthCodesInputSchema'
import { UserCreateOrConnectWithoutOAuthCodesInputSchema } from './UserCreateOrConnectWithoutOAuthCodesInputSchema'
import { UserUpsertWithoutOAuthCodesInputSchema } from './UserUpsertWithoutOAuthCodesInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutOAuthCodesInputSchema } from './UserUpdateToOneWithWhereWithoutOAuthCodesInputSchema'
import { UserUpdateWithoutOAuthCodesInputSchema } from './UserUpdateWithoutOAuthCodesInputSchema'
import { UserUncheckedUpdateWithoutOAuthCodesInputSchema } from './UserUncheckedUpdateWithoutOAuthCodesInputSchema'

export const UserUpdateOneRequiredWithoutOAuthCodesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOAuthCodesNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => UserCreateWithoutOAuthCodesInputSchema),
                    z.lazy(() => UserUncheckedCreateWithoutOAuthCodesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOAuthCodesInputSchema).optional(),
            upsert: z.lazy(() => UserUpsertWithoutOAuthCodesInputSchema).optional(),
            connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => UserUpdateToOneWithWhereWithoutOAuthCodesInputSchema),
                    z.lazy(() => UserUpdateWithoutOAuthCodesInputSchema),
                    z.lazy(() => UserUncheckedUpdateWithoutOAuthCodesInputSchema)
                ])
                .optional()
        })
        .strict()

export default UserUpdateOneRequiredWithoutOAuthCodesNestedInputSchema
