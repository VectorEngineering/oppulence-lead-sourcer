import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerRoleSchema } from './PartnerRoleSchema'
import { UserCreateNestedOneWithoutPartnersInputSchema } from './UserCreateNestedOneWithoutPartnersInputSchema'
import { PartnerCreateNestedOneWithoutUsersInputSchema } from './PartnerCreateNestedOneWithoutUsersInputSchema'

export const PartnerUserCreateInputSchema: z.ZodType<Prisma.PartnerUserCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.lazy(() => PartnerRoleSchema).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        user: z.lazy(() => UserCreateNestedOneWithoutPartnersInputSchema),
        partner: z.lazy(() => PartnerCreateNestedOneWithoutUsersInputSchema)
    })
    .strict()

export default PartnerUserCreateInputSchema
