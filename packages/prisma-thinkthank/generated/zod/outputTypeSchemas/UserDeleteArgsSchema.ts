import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { AccountFindManyArgsSchema } from './AccountFindManyArgsSchema'
import { SessionFindManyArgsSchema } from './SessionFindManyArgsSchema'
import { ProjectUsersFindManyArgsSchema } from './ProjectUsersFindManyArgsSchema'
import { PartnerUserFindManyArgsSchema } from './PartnerUserFindManyArgsSchema'
import { LinkFindManyArgsSchema } from './LinkFindManyArgsSchema'
import { DashboardFindManyArgsSchema } from './DashboardFindManyArgsSchema'
import { TokenFindManyArgsSchema } from './TokenFindManyArgsSchema'
import { RestrictedTokenFindManyArgsSchema } from './RestrictedTokenFindManyArgsSchema'
import { OAuthCodeFindManyArgsSchema } from './OAuthCodeFindManyArgsSchema'
import { IntegrationFindManyArgsSchema } from './IntegrationFindManyArgsSchema'
import { InstalledIntegrationFindManyArgsSchema } from './InstalledIntegrationFindManyArgsSchema'
import { UtmTemplateFindManyArgsSchema } from './UtmTemplateFindManyArgsSchema'
import { AppFindManyArgsSchema } from './AppFindManyArgsSchema'
import { BankAccountFindManyArgsSchema } from './BankAccountFindManyArgsSchema'
import { TransactionFindManyArgsSchema } from './TransactionFindManyArgsSchema'
import { DocumentFindManyArgsSchema } from './DocumentFindManyArgsSchema'
import { ReportAccessFindManyArgsSchema } from './ReportAccessFindManyArgsSchema'
import { ReportFindManyArgsSchema } from './ReportFindManyArgsSchema'
import { AIAssistantSettingsArgsSchema } from './AIAssistantSettingsArgsSchema'
import { FinancialSettingsArgsSchema } from './FinancialSettingsArgsSchema'
import { BankConnectionSettingsFindManyArgsSchema } from './BankConnectionSettingsFindManyArgsSchema'
import { UserCountOutputTypeArgsSchema } from './UserCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        email: z.boolean().optional(),
        emailVerified: z.boolean().optional(),
        image: z.boolean().optional(),
        isMachine: z.boolean().optional(),
        passwordHash: z.boolean().optional(),
        invalidLoginAttempts: z.boolean().optional(),
        lockedAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        subscribed: z.boolean().optional(),
        source: z.boolean().optional(),
        defaultWorkspace: z.boolean().optional(),
        defaultPartnerId: z.boolean().optional(),
        referralLinkId: z.boolean().optional(),
        fullName: z.boolean().optional(),
        dateFormat: z.boolean().optional(),
        locale: z.boolean().optional(),
        timeFormat: z.boolean().optional(),
        timezone: z.boolean().optional(),
        weekStartsOnMonday: z.boolean().optional(),
        accounts: z.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)]).optional(),
        sessions: z.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)]).optional(),
        projects: z.union([z.boolean(), z.lazy(() => ProjectUsersFindManyArgsSchema)]).optional(),
        partners: z.union([z.boolean(), z.lazy(() => PartnerUserFindManyArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkFindManyArgsSchema)]).optional(),
        dashboards: z.union([z.boolean(), z.lazy(() => DashboardFindManyArgsSchema)]).optional(),
        tokens: z.union([z.boolean(), z.lazy(() => TokenFindManyArgsSchema)]).optional(),
        restrictedTokens: z.union([z.boolean(), z.lazy(() => RestrictedTokenFindManyArgsSchema)]).optional(),
        oAuthCodes: z.union([z.boolean(), z.lazy(() => OAuthCodeFindManyArgsSchema)]).optional(),
        integrations: z.union([z.boolean(), z.lazy(() => IntegrationFindManyArgsSchema)]).optional(),
        installedIntegrations: z.union([z.boolean(), z.lazy(() => InstalledIntegrationFindManyArgsSchema)]).optional(),
        utmTemplates: z.union([z.boolean(), z.lazy(() => UtmTemplateFindManyArgsSchema)]).optional(),
        apps: z.union([z.boolean(), z.lazy(() => AppFindManyArgsSchema)]).optional(),
        bankAccounts: z.union([z.boolean(), z.lazy(() => BankAccountFindManyArgsSchema)]).optional(),
        Transaction: z.union([z.boolean(), z.lazy(() => TransactionFindManyArgsSchema)]).optional(),
        Document: z.union([z.boolean(), z.lazy(() => DocumentFindManyArgsSchema)]).optional(),
        reportAccess: z.union([z.boolean(), z.lazy(() => ReportAccessFindManyArgsSchema)]).optional(),
        reports: z.union([z.boolean(), z.lazy(() => ReportFindManyArgsSchema)]).optional(),
        aiAssistantSettings: z.union([z.boolean(), z.lazy(() => AIAssistantSettingsArgsSchema)]).optional(),
        financialSettings: z.union([z.boolean(), z.lazy(() => FinancialSettingsArgsSchema)]).optional(),
        BankConnectionSettings: z.union([z.boolean(), z.lazy(() => BankConnectionSettingsFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z
    .object({
        select: UserSelectSchema.optional(),
        include: UserIncludeSchema.optional(),
        where: UserWhereUniqueInputSchema
    })
    .strict()

export default UserDeleteArgsSchema
