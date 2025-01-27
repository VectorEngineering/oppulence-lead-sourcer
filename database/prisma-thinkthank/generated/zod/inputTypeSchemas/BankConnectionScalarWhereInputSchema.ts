import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { EnumBankProviderNullableFilterSchema } from './EnumBankProviderNullableFilterSchema'
import { BankProviderSchema } from './BankProviderSchema'
import { EnumConnectionStatusNullableFilterSchema } from './EnumConnectionStatusNullableFilterSchema'
import { ConnectionStatusSchema } from './ConnectionStatusSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const BankConnectionScalarWhereInputSchema: z.ZodType<Prisma.BankConnectionScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => BankConnectionScalarWhereInputSchema), z.lazy(() => BankConnectionScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => BankConnectionScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => BankConnectionScalarWhereInputSchema), z.lazy(() => BankConnectionScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accessToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        refreshToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        tokenExpiresAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        institutionId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        institutionName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        logoUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        primaryColor: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        provider: z
            .union([z.lazy(() => EnumBankProviderNullableFilterSchema), z.lazy(() => BankProviderSchema)])
            .optional()
            .nullable(),
        status: z
            .union([z.lazy(() => EnumConnectionStatusNullableFilterSchema), z.lazy(() => ConnectionStatusSchema)])
            .optional()
            .nullable(),
        enrollmentId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        referenceId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        consentId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        consentExpiresAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastAccessed: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastSuccessfulUpdate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        nextUpdateAttempt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        updateFrequency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        errorDetails: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        errorRetries: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        errorCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        lastErrorAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        supportsAccountIdentification: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        supportsTransactionSync: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        supportsBalanceRefresh: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        supportedProducts: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        expiresAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default BankConnectionScalarWhereInputSchema
