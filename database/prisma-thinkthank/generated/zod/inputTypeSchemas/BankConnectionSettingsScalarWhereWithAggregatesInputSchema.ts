import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { EnumSyncFrequencyWithAggregatesFilterSchema } from './EnumSyncFrequencyWithAggregatesFilterSchema'
import { SyncFrequencySchema } from './SyncFrequencySchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { EnumConnectionStatusWithAggregatesFilterSchema } from './EnumConnectionStatusWithAggregatesFilterSchema'
import { ConnectionStatusSchema } from './ConnectionStatusSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const BankConnectionSettingsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BankConnectionSettingsScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => BankConnectionSettingsScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => BankConnectionSettingsScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => BankConnectionSettingsScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => BankConnectionSettingsScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => BankConnectionSettingsScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            syncEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            syncStartTime: z
                .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
                .optional()
                .nullable(),
            syncDayOfWeek: z
                .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
                .optional()
                .nullable(),
            syncDayOfMonth: z
                .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
                .optional()
                .nullable(),
            syncFrequency: z
                .union([z.lazy(() => EnumSyncFrequencyWithAggregatesFilterSchema), z.lazy(() => SyncFrequencySchema)])
                .optional(),
            connectionTimeout: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
            readTimeout: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
            maxRequestsPerHour: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
            maxConcurrentRequests: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
            syncTransactions: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            syncBalances: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            syncStatements: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            syncIdentity: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            syncCategories: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            syncMerchants: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            syncAttachments: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            historicalDays: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
            refreshTokenEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            autoReconnectEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            connectionStatus: z
                .union([z.lazy(() => EnumConnectionStatusWithAggregatesFilterSchema), z.lazy(() => ConnectionStatusSchema)])
                .optional(),
            bankConnectionId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
            updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
            createdBy: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            merchantEnrichmentEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            merchantCategorizationEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            merchantLogoEnrichmentEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            merchantNameCleaningEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional()
        })
        .strict()

export default BankConnectionSettingsScalarWhereWithAggregatesInputSchema
