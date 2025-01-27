import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { ProgramTypeSchema } from './ProgramTypeSchema'
import { EnumProgramTypeFieldUpdateOperationsInputSchema } from './EnumProgramTypeFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { CommissionTypeSchema } from './CommissionTypeSchema'
import { EnumCommissionTypeFieldUpdateOperationsInputSchema } from './EnumCommissionTypeFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'
import { NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema } from './NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DiscountUpdateManyWithoutProgramNestedInputSchema } from './DiscountUpdateManyWithoutProgramNestedInputSchema'
import { ProjectUpdateOneRequiredWithoutProgramsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutProgramsNestedInputSchema'
import { DomainUpdateOneWithoutProgramsNestedInputSchema } from './DomainUpdateOneWithoutProgramsNestedInputSchema'
import { ProgramEnrollmentUpdateManyWithoutProgramNestedInputSchema } from './ProgramEnrollmentUpdateManyWithoutProgramNestedInputSchema'
import { PayoutUpdateManyWithoutProgramNestedInputSchema } from './PayoutUpdateManyWithoutProgramNestedInputSchema'
import { SaleUpdateManyWithoutProgramNestedInputSchema } from './SaleUpdateManyWithoutProgramNestedInputSchema'
import { InvoiceUpdateManyWithoutProgramNestedInputSchema } from './InvoiceUpdateManyWithoutProgramNestedInputSchema'
import { ProgramResourceUpdateManyWithoutProgramNestedInputSchema } from './ProgramResourceUpdateManyWithoutProgramNestedInputSchema'
import { ProgramApplicationUpdateManyWithoutProgramNestedInputSchema } from './ProgramApplicationUpdateManyWithoutProgramNestedInputSchema'
import { ProgramInviteUpdateManyWithoutProgramNestedInputSchema } from './ProgramInviteUpdateManyWithoutProgramNestedInputSchema'

export const ProgramUpdateWithoutLinksInputSchema: z.ZodType<Prisma.ProgramUpdateWithoutLinksInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        logo: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        wordmark: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        brandColor: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        url: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        type: z.union([z.lazy(() => ProgramTypeSchema), z.lazy(() => EnumProgramTypeFieldUpdateOperationsInputSchema)]).optional(),
        cookieLength: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        commissionAmount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        commissionType: z
            .union([z.lazy(() => CommissionTypeSchema), z.lazy(() => EnumCommissionTypeFieldUpdateOperationsInputSchema)])
            .optional(),
        commissionDuration: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        commissionInterval: z
            .union([z.lazy(() => CommissionIntervalSchema), z.lazy(() => NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        landerData: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        discounts: z.lazy(() => DiscountUpdateManyWithoutProgramNestedInputSchema).optional(),
        workspace: z.lazy(() => ProjectUpdateOneRequiredWithoutProgramsNestedInputSchema).optional(),
        primaryDomain: z.lazy(() => DomainUpdateOneWithoutProgramsNestedInputSchema).optional(),
        partners: z.lazy(() => ProgramEnrollmentUpdateManyWithoutProgramNestedInputSchema).optional(),
        payouts: z.lazy(() => PayoutUpdateManyWithoutProgramNestedInputSchema).optional(),
        sales: z.lazy(() => SaleUpdateManyWithoutProgramNestedInputSchema).optional(),
        invoices: z.lazy(() => InvoiceUpdateManyWithoutProgramNestedInputSchema).optional(),
        resources: z.lazy(() => ProgramResourceUpdateManyWithoutProgramNestedInputSchema).optional(),
        applications: z.lazy(() => ProgramApplicationUpdateManyWithoutProgramNestedInputSchema).optional(),
        invites: z.lazy(() => ProgramInviteUpdateManyWithoutProgramNestedInputSchema).optional()
    })
    .strict()

export default ProgramUpdateWithoutLinksInputSchema
