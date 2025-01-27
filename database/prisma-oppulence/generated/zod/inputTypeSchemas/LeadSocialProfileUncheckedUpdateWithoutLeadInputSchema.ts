import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema'
import { EnumLeadSocialPlatformFieldUpdateOperationsInputSchema } from './EnumLeadSocialPlatformFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'

export const LeadSocialProfileUncheckedUpdateWithoutLeadInputSchema: z.ZodType<Prisma.LeadSocialProfileUncheckedUpdateWithoutLeadInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        platform: z
            .union([z.lazy(() => LeadSocialPlatformSchema), z.lazy(() => EnumLeadSocialPlatformFieldUpdateOperationsInputSchema)])
            .optional(),
        profileUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        username: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        lastSynced: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default LeadSocialProfileUncheckedUpdateWithoutLeadInputSchema
