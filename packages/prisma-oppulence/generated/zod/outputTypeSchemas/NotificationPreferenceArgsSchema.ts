import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { NotificationPreferenceSelectSchema } from '../inputTypeSchemas/NotificationPreferenceSelectSchema'
import { NotificationPreferenceIncludeSchema } from '../inputTypeSchemas/NotificationPreferenceIncludeSchema'

export const NotificationPreferenceArgsSchema: z.ZodType<Prisma.NotificationPreferenceDefaultArgs> = z
    .object({
        select: z.lazy(() => NotificationPreferenceSelectSchema).optional(),
        include: z.lazy(() => NotificationPreferenceIncludeSchema).optional()
    })
    .strict()

export default NotificationPreferenceArgsSchema
