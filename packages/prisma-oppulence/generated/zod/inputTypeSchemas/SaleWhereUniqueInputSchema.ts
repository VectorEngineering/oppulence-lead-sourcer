import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleWhereInputSchema } from './SaleWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { EnumSaleStatusFilterSchema } from './EnumSaleStatusFilterSchema'
import { SaleStatusSchema } from './SaleStatusSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { EnumCommissionTypeFilterSchema } from './EnumCommissionTypeFilterSchema'
import { CommissionTypeSchema } from './CommissionTypeSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { EnumCommissionIntervalNullableFilterSchema } from './EnumCommissionIntervalNullableFilterSchema'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { ProgramRelationFilterSchema } from './ProgramRelationFilterSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'
import { PartnerRelationFilterSchema } from './PartnerRelationFilterSchema'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'
import { PayoutNullableRelationFilterSchema } from './PayoutNullableRelationFilterSchema'
import { PayoutWhereInputSchema } from './PayoutWhereInputSchema'
import { CustomerRelationFilterSchema } from './CustomerRelationFilterSchema'
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema'

export const SaleWhereUniqueInputSchema: z.ZodType<Prisma.SaleWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            eventId: z.string()
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            eventId: z.string()
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                eventId: z.string().optional(),
                AND: z.union([z.lazy(() => SaleWhereInputSchema), z.lazy(() => SaleWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => SaleWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => SaleWhereInputSchema), z.lazy(() => SaleWhereInputSchema).array()]).optional(),
                programId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                partnerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                payoutId: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                customerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                linkId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                clickId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                invoiceId: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                amount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                currency: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                paymentProcessor: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                earnings: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                status: z.union([z.lazy(() => EnumSaleStatusFilterSchema), z.lazy(() => SaleStatusSchema)]).optional(),
                metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
                commissionAmount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                commissionType: z.union([z.lazy(() => EnumCommissionTypeFilterSchema), z.lazy(() => CommissionTypeSchema)]).optional(),
                recurringCommission: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                recurringInterval: z
                    .union([z.lazy(() => EnumCommissionIntervalNullableFilterSchema), z.lazy(() => CommissionIntervalSchema)])
                    .optional()
                    .nullable(),
                recurringDuration: z
                    .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
                    .optional()
                    .nullable(),
                isLifetimeRecurring: z
                    .union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
                    .optional()
                    .nullable(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                program: z.union([z.lazy(() => ProgramRelationFilterSchema), z.lazy(() => ProgramWhereInputSchema)]).optional(),
                partner: z.union([z.lazy(() => PartnerRelationFilterSchema), z.lazy(() => PartnerWhereInputSchema)]).optional(),
                payout: z
                    .union([z.lazy(() => PayoutNullableRelationFilterSchema), z.lazy(() => PayoutWhereInputSchema)])
                    .optional()
                    .nullable(),
                customer: z.union([z.lazy(() => CustomerRelationFilterSchema), z.lazy(() => CustomerWhereInputSchema)]).optional()
            })
            .strict()
    )

export default SaleWhereUniqueInputSchema
