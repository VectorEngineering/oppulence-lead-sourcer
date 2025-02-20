import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { NotificationPreferenceWhereInputSchema } from '../inputTypeSchemas/NotificationPreferenceWhereInputSchema'
import { NotificationPreferenceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/NotificationPreferenceOrderByWithAggregationInputSchema'
import { NotificationPreferenceScalarFieldEnumSchema } from '../inputTypeSchemas/NotificationPreferenceScalarFieldEnumSchema'
import { NotificationPreferenceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/NotificationPreferenceScalarWhereWithAggregatesInputSchema'

export const NotificationPreferenceGroupByArgsSchema: z.ZodType<Prisma.NotificationPreferenceGroupByArgs> = z
    .object({
        where: NotificationPreferenceWhereInputSchema.optional(),
        orderBy: z
            .union([
                NotificationPreferenceOrderByWithAggregationInputSchema.array(),
                NotificationPreferenceOrderByWithAggregationInputSchema
            ])
            .optional(),
        by: NotificationPreferenceScalarFieldEnumSchema.array(),
        having: NotificationPreferenceScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default NotificationPreferenceGroupByArgsSchema
