import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { EnumAccountTypeNullableFilterSchema } from './EnumAccountTypeNullableFilterSchema'
import { AccountTypeSchema } from './AccountTypeSchema'
import { EnumAccountSubTypeNullableFilterSchema } from './EnumAccountSubTypeNullableFilterSchema'
import { AccountSubTypeSchema } from './AccountSubTypeSchema'
import { EnumAccountOwnershipTypeNullableFilterSchema } from './EnumAccountOwnershipTypeNullableFilterSchema'
import { AccountOwnershipTypeSchema } from './AccountOwnershipTypeSchema'
import { EnumAccountPurposeNullableFilterSchema } from './EnumAccountPurposeNullableFilterSchema'
import { AccountPurposeSchema } from './AccountPurposeSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema'
import { EnumConnectionStatusNullableFilterSchema } from './EnumConnectionStatusNullableFilterSchema'
import { ConnectionStatusSchema } from './ConnectionStatusSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { EnumRiskLevelNullableFilterSchema } from './EnumRiskLevelNullableFilterSchema'
import { RiskLevelSchema } from './RiskLevelSchema'
import { EnumComplianceStatusNullableFilterSchema } from './EnumComplianceStatusNullableFilterSchema'
import { ComplianceStatusSchema } from './ComplianceStatusSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const BankAccountScalarWhereInputSchema: z.ZodType<Prisma.BankAccountScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => BankAccountScalarWhereInputSchema), z.lazy(() => BankAccountScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => BankAccountScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => BankAccountScalarWhereInputSchema), z.lazy(() => BankAccountScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accountId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accountReference: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accountNumber: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        routingNumber: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        mask: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        name: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        officialName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        displayName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z
            .union([z.lazy(() => EnumAccountTypeNullableFilterSchema), z.lazy(() => AccountTypeSchema)])
            .optional()
            .nullable(),
        subtype: z
            .union([z.lazy(() => EnumAccountSubTypeNullableFilterSchema), z.lazy(() => AccountSubTypeSchema)])
            .optional()
            .nullable(),
        ownershipType: z
            .union([z.lazy(() => EnumAccountOwnershipTypeNullableFilterSchema), z.lazy(() => AccountOwnershipTypeSchema)])
            .optional()
            .nullable(),
        purpose: z
            .union([z.lazy(() => EnumAccountPurposeNullableFilterSchema), z.lazy(() => AccountPurposeSchema)])
            .optional()
            .nullable(),
        balance: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        baseBalance: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        availableBalance: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        pendingBalance: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        creditLimit: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        minBalance: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        targetBalance: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        overdraftLimit: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        interestRate: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        currency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        baseCurrency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        exchangeRate: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        exchangeRateTimestamp: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        enabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        hidden: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        favorite: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        manual: z
            .union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
            .optional()
            .nullable(),
        verified: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        frozen: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        closeDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        spendingLimit: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        dailyLimit: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        monthlyLimit: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        requiresApproval: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        approvalThreshold: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        status: z
            .union([z.lazy(() => EnumConnectionStatusNullableFilterSchema), z.lazy(() => ConnectionStatusSchema)])
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
        lastSyncAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        nextSyncAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        errorCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        lastErrorAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        riskLevel: z
            .union([z.lazy(() => EnumRiskLevelNullableFilterSchema), z.lazy(() => RiskLevelSchema)])
            .optional()
            .nullable(),
        complianceStatus: z
            .union([z.lazy(() => EnumComplianceStatusNullableFilterSchema), z.lazy(() => ComplianceStatusSchema)])
            .optional()
            .nullable(),
        lastReviewDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        nextReviewDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        reviewNotes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        bankConnectionId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdBy: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        lastActivityAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable()
    })
    .strict()

export default BankAccountScalarWhereInputSchema
