import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { NotificationPreferenceCreateManyInputSchema } from '../inputTypeSchemas/NotificationPreferenceCreateManyInputSchema'

export const NotificationPreferenceCreateManyArgsSchema: z.ZodType<Prisma.NotificationPreferenceCreateManyArgs> = z
    .object({
        data: z.union([NotificationPreferenceCreateManyInputSchema, NotificationPreferenceCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default NotificationPreferenceCreateManyArgsSchema
