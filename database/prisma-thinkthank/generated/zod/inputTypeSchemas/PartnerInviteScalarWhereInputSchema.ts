import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumPartnerRoleFilterSchema } from './EnumPartnerRoleFilterSchema'
import { PartnerRoleSchema } from './PartnerRoleSchema'

export const PartnerInviteScalarWhereInputSchema: z.ZodType<Prisma.PartnerInviteScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => PartnerInviteScalarWhereInputSchema), z.lazy(() => PartnerInviteScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => PartnerInviteScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => PartnerInviteScalarWhereInputSchema), z.lazy(() => PartnerInviteScalarWhereInputSchema).array()])
            .optional(),
        email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        expires: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        partnerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        role: z.union([z.lazy(() => EnumPartnerRoleFilterSchema), z.lazy(() => PartnerRoleSchema)]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default PartnerInviteScalarWhereInputSchema
