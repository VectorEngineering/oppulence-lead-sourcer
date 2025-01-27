import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { PartnerRoleSchema } from './PartnerRoleSchema'
import { EnumPartnerRoleFieldUpdateOperationsInputSchema } from './EnumPartnerRoleFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { UserUpdateOneRequiredWithoutPartnersNestedInputSchema } from './UserUpdateOneRequiredWithoutPartnersNestedInputSchema'
import { PartnerUpdateOneRequiredWithoutUsersNestedInputSchema } from './PartnerUpdateOneRequiredWithoutUsersNestedInputSchema'

export const PartnerUserUpdateInputSchema: z.ZodType<Prisma.PartnerUserUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        role: z.union([z.lazy(() => PartnerRoleSchema), z.lazy(() => EnumPartnerRoleFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        user: z.lazy(() => UserUpdateOneRequiredWithoutPartnersNestedInputSchema).optional(),
        partner: z.lazy(() => PartnerUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
    })
    .strict()

export default PartnerUserUpdateInputSchema
