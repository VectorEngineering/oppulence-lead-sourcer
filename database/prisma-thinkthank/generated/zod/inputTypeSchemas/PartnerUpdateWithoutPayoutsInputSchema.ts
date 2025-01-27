import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PartnerStatusSchema } from './PartnerStatusSchema'
import { EnumPartnerStatusFieldUpdateOperationsInputSchema } from './EnumPartnerStatusFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { ProgramEnrollmentUpdateManyWithoutPartnerNestedInputSchema } from './ProgramEnrollmentUpdateManyWithoutPartnerNestedInputSchema'
import { ProgramApplicationUpdateManyWithoutPartnerNestedInputSchema } from './ProgramApplicationUpdateManyWithoutPartnerNestedInputSchema'
import { PartnerUserUpdateManyWithoutPartnerNestedInputSchema } from './PartnerUserUpdateManyWithoutPartnerNestedInputSchema'
import { PartnerInviteUpdateManyWithoutPartnerNestedInputSchema } from './PartnerInviteUpdateManyWithoutPartnerNestedInputSchema'
import { SaleUpdateManyWithoutPartnerNestedInputSchema } from './SaleUpdateManyWithoutPartnerNestedInputSchema'

export const PartnerUpdateWithoutPayoutsInputSchema: z.ZodType<Prisma.PartnerUpdateWithoutPayoutsInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        image: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        bio: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        country: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        status: z.union([z.lazy(() => PartnerStatusSchema), z.lazy(() => EnumPartnerStatusFieldUpdateOperationsInputSchema)]).optional(),
        stripeConnectId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        payoutsEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        showOnLeaderboard: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        programs: z.lazy(() => ProgramEnrollmentUpdateManyWithoutPartnerNestedInputSchema).optional(),
        applications: z.lazy(() => ProgramApplicationUpdateManyWithoutPartnerNestedInputSchema).optional(),
        users: z.lazy(() => PartnerUserUpdateManyWithoutPartnerNestedInputSchema).optional(),
        invites: z.lazy(() => PartnerInviteUpdateManyWithoutPartnerNestedInputSchema).optional(),
        sales: z.lazy(() => SaleUpdateManyWithoutPartnerNestedInputSchema).optional()
    })
    .strict()

export default PartnerUpdateWithoutPayoutsInputSchema
