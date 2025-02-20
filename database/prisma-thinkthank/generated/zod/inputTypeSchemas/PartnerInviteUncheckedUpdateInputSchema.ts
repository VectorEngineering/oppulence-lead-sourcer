import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { PartnerRoleSchema } from './PartnerRoleSchema'
import { EnumPartnerRoleFieldUpdateOperationsInputSchema } from './EnumPartnerRoleFieldUpdateOperationsInputSchema'

export const PartnerInviteUncheckedUpdateInputSchema: z.ZodType<Prisma.PartnerInviteUncheckedUpdateInput> = z
    .object({
        email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        expires: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        partnerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        role: z.union([z.lazy(() => PartnerRoleSchema), z.lazy(() => EnumPartnerRoleFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default PartnerInviteUncheckedUpdateInputSchema
