import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionIncludeSchema } from '../inputTypeSchemas/BankConnectionIncludeSchema'
import { BankConnectionWhereUniqueInputSchema } from '../inputTypeSchemas/BankConnectionWhereUniqueInputSchema'
import { BankConnectionCreateInputSchema } from '../inputTypeSchemas/BankConnectionCreateInputSchema'
import { BankConnectionUncheckedCreateInputSchema } from '../inputTypeSchemas/BankConnectionUncheckedCreateInputSchema'
import { BankConnectionUpdateInputSchema } from '../inputTypeSchemas/BankConnectionUpdateInputSchema'
import { BankConnectionUncheckedUpdateInputSchema } from '../inputTypeSchemas/BankConnectionUncheckedUpdateInputSchema'
import { BankConnectionSettingsArgsSchema } from './BankConnectionSettingsArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { BankAccountFindManyArgsSchema } from './BankAccountFindManyArgsSchema'
import { BankConnectionCountOutputTypeArgsSchema } from './BankConnectionCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BankConnectionSelectSchema: z.ZodType<Prisma.BankConnectionSelect> = z
    .object({
        id: z.boolean().optional(),
        accessToken: z.boolean().optional(),
        refreshToken: z.boolean().optional(),
        tokenExpiresAt: z.boolean().optional(),
        institutionId: z.boolean().optional(),
        institutionName: z.boolean().optional(),
        name: z.boolean().optional(),
        logoUrl: z.boolean().optional(),
        primaryColor: z.boolean().optional(),
        provider: z.boolean().optional(),
        status: z.boolean().optional(),
        enrollmentId: z.boolean().optional(),
        referenceId: z.boolean().optional(),
        consentId: z.boolean().optional(),
        consentExpiresAt: z.boolean().optional(),
        lastAccessed: z.boolean().optional(),
        lastSuccessfulUpdate: z.boolean().optional(),
        nextUpdateAttempt: z.boolean().optional(),
        updateFrequency: z.boolean().optional(),
        errorDetails: z.boolean().optional(),
        errorRetries: z.boolean().optional(),
        errorCount: z.boolean().optional(),
        lastErrorAt: z.boolean().optional(),
        supportsAccountIdentification: z.boolean().optional(),
        supportsTransactionSync: z.boolean().optional(),
        supportsBalanceRefresh: z.boolean().optional(),
        supportedProducts: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        projectId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        settings: z.union([z.boolean(), z.lazy(() => BankConnectionSettingsArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        bankAccounts: z.union([z.boolean(), z.lazy(() => BankAccountFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => BankConnectionCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const BankConnectionUpsertArgsSchema: z.ZodType<Prisma.BankConnectionUpsertArgs> = z
    .object({
        select: BankConnectionSelectSchema.optional(),
        include: BankConnectionIncludeSchema.optional(),
        where: BankConnectionWhereUniqueInputSchema,
        create: z.union([BankConnectionCreateInputSchema, BankConnectionUncheckedCreateInputSchema]),
        update: z.union([BankConnectionUpdateInputSchema, BankConnectionUncheckedUpdateInputSchema])
    })
    .strict()

export default BankConnectionUpsertArgsSchema
