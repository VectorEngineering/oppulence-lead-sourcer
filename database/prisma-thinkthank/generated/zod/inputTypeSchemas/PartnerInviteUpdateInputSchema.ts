import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { PartnerRoleSchema } from './PartnerRoleSchema'
import { EnumPartnerRoleFieldUpdateOperationsInputSchema } from './EnumPartnerRoleFieldUpdateOperationsInputSchema'
import { PartnerUpdateOneRequiredWithoutInvitesNestedInputSchema } from './PartnerUpdateOneRequiredWithoutInvitesNestedInputSchema'

export const PartnerInviteUpdateInputSchema: z.ZodType<Prisma.PartnerInviteUpdateInput> = z
    .object({
        email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        expires: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        role: z.union([z.lazy(() => PartnerRoleSchema), z.lazy(() => EnumPartnerRoleFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        partner: z.lazy(() => PartnerUpdateOneRequiredWithoutInvitesNestedInputSchema).optional()
    })
    .strict()

export default PartnerInviteUpdateInputSchema
