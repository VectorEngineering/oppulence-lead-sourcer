import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const BankConnectionMinOrderByAggregateInputSchema: z.ZodType<Prisma.BankConnectionMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        accessToken: z.lazy(() => SortOrderSchema).optional(),
        refreshToken: z.lazy(() => SortOrderSchema).optional(),
        tokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
        institutionId: z.lazy(() => SortOrderSchema).optional(),
        institutionName: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        logoUrl: z.lazy(() => SortOrderSchema).optional(),
        primaryColor: z.lazy(() => SortOrderSchema).optional(),
        provider: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        enrollmentId: z.lazy(() => SortOrderSchema).optional(),
        referenceId: z.lazy(() => SortOrderSchema).optional(),
        consentId: z.lazy(() => SortOrderSchema).optional(),
        consentExpiresAt: z.lazy(() => SortOrderSchema).optional(),
        lastAccessed: z.lazy(() => SortOrderSchema).optional(),
        lastSuccessfulUpdate: z.lazy(() => SortOrderSchema).optional(),
        nextUpdateAttempt: z.lazy(() => SortOrderSchema).optional(),
        updateFrequency: z.lazy(() => SortOrderSchema).optional(),
        errorDetails: z.lazy(() => SortOrderSchema).optional(),
        errorRetries: z.lazy(() => SortOrderSchema).optional(),
        errorCount: z.lazy(() => SortOrderSchema).optional(),
        lastErrorAt: z.lazy(() => SortOrderSchema).optional(),
        supportsAccountIdentification: z.lazy(() => SortOrderSchema).optional(),
        supportsTransactionSync: z.lazy(() => SortOrderSchema).optional(),
        supportsBalanceRefresh: z.lazy(() => SortOrderSchema).optional(),
        supportedProducts: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default BankConnectionMinOrderByAggregateInputSchema
