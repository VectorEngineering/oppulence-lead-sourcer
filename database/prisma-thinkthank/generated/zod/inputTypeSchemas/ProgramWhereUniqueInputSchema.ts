import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { EnumProgramTypeFilterSchema } from './EnumProgramTypeFilterSchema'
import { ProgramTypeSchema } from './ProgramTypeSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { EnumCommissionTypeFilterSchema } from './EnumCommissionTypeFilterSchema'
import { CommissionTypeSchema } from './CommissionTypeSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { EnumCommissionIntervalNullableFilterSchema } from './EnumCommissionIntervalNullableFilterSchema'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DiscountListRelationFilterSchema } from './DiscountListRelationFilterSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { DomainNullableRelationFilterSchema } from './DomainNullableRelationFilterSchema'
import { DomainWhereInputSchema } from './DomainWhereInputSchema'
import { ProgramEnrollmentListRelationFilterSchema } from './ProgramEnrollmentListRelationFilterSchema'
import { PayoutListRelationFilterSchema } from './PayoutListRelationFilterSchema'
import { SaleListRelationFilterSchema } from './SaleListRelationFilterSchema'
import { InvoiceListRelationFilterSchema } from './InvoiceListRelationFilterSchema'
import { ProgramResourceListRelationFilterSchema } from './ProgramResourceListRelationFilterSchema'
import { ProgramApplicationListRelationFilterSchema } from './ProgramApplicationListRelationFilterSchema'
import { ProgramInviteListRelationFilterSchema } from './ProgramInviteListRelationFilterSchema'
import { LinkListRelationFilterSchema } from './LinkListRelationFilterSchema'

export const ProgramWhereUniqueInputSchema: z.ZodType<Prisma.ProgramWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            slug: z.string()
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            slug: z.string()
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                slug: z.string().optional(),
                AND: z.union([z.lazy(() => ProgramWhereInputSchema), z.lazy(() => ProgramWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => ProgramWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => ProgramWhereInputSchema), z.lazy(() => ProgramWhereInputSchema).array()]).optional(),
                workspaceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                logo: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                wordmark: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                brandColor: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                domain: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                url: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                type: z.union([z.lazy(() => EnumProgramTypeFilterSchema), z.lazy(() => ProgramTypeSchema)]).optional(),
                cookieLength: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                commissionAmount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                commissionType: z.union([z.lazy(() => EnumCommissionTypeFilterSchema), z.lazy(() => CommissionTypeSchema)]).optional(),
                commissionDuration: z
                    .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
                    .optional()
                    .nullable(),
                commissionInterval: z
                    .union([z.lazy(() => EnumCommissionIntervalNullableFilterSchema), z.lazy(() => CommissionIntervalSchema)])
                    .optional()
                    .nullable(),
                landerData: z.lazy(() => JsonNullableFilterSchema).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                discounts: z.lazy(() => DiscountListRelationFilterSchema).optional(),
                workspace: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional(),
                primaryDomain: z
                    .union([z.lazy(() => DomainNullableRelationFilterSchema), z.lazy(() => DomainWhereInputSchema)])
                    .optional()
                    .nullable(),
                partners: z.lazy(() => ProgramEnrollmentListRelationFilterSchema).optional(),
                payouts: z.lazy(() => PayoutListRelationFilterSchema).optional(),
                sales: z.lazy(() => SaleListRelationFilterSchema).optional(),
                invoices: z.lazy(() => InvoiceListRelationFilterSchema).optional(),
                resources: z.lazy(() => ProgramResourceListRelationFilterSchema).optional(),
                applications: z.lazy(() => ProgramApplicationListRelationFilterSchema).optional(),
                invites: z.lazy(() => ProgramInviteListRelationFilterSchema).optional(),
                links: z.lazy(() => LinkListRelationFilterSchema).optional()
            })
            .strict()
    )

export default ProgramWhereUniqueInputSchema
