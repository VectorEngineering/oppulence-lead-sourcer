import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerInviteEmailPartnerIdCompoundUniqueInputSchema } from './PartnerInviteEmailPartnerIdCompoundUniqueInputSchema'
import { PartnerInviteWhereInputSchema } from './PartnerInviteWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumPartnerRoleFilterSchema } from './EnumPartnerRoleFilterSchema'
import { PartnerRoleSchema } from './PartnerRoleSchema'
import { PartnerRelationFilterSchema } from './PartnerRelationFilterSchema'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'

export const PartnerInviteWhereUniqueInputSchema: z.ZodType<Prisma.PartnerInviteWhereUniqueInput> = z
    .object({
        email_partnerId: z.lazy(() => PartnerInviteEmailPartnerIdCompoundUniqueInputSchema)
    })
    .and(
        z
            .object({
                email_partnerId: z.lazy(() => PartnerInviteEmailPartnerIdCompoundUniqueInputSchema).optional(),
                AND: z.union([z.lazy(() => PartnerInviteWhereInputSchema), z.lazy(() => PartnerInviteWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => PartnerInviteWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => PartnerInviteWhereInputSchema), z.lazy(() => PartnerInviteWhereInputSchema).array()]).optional(),
                email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                expires: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                partnerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                role: z.union([z.lazy(() => EnumPartnerRoleFilterSchema), z.lazy(() => PartnerRoleSchema)]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                partner: z.union([z.lazy(() => PartnerRelationFilterSchema), z.lazy(() => PartnerWhereInputSchema)]).optional()
            })
            .strict()
    )

export default PartnerInviteWhereUniqueInputSchema
