import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
    .object({
        accounts: z.boolean().optional(),
        sessions: z.boolean().optional(),
        projects: z.boolean().optional(),
        partners: z.boolean().optional(),
        links: z.boolean().optional(),
        dashboards: z.boolean().optional(),
        tokens: z.boolean().optional(),
        restrictedTokens: z.boolean().optional(),
        oAuthCodes: z.boolean().optional(),
        integrations: z.boolean().optional(),
        installedIntegrations: z.boolean().optional(),
        utmTemplates: z.boolean().optional(),
        apps: z.boolean().optional(),
        bankAccounts: z.boolean().optional(),
        Transaction: z.boolean().optional(),
        Document: z.boolean().optional(),
        reportAccess: z.boolean().optional(),
        reports: z.boolean().optional(),
        BankConnectionSettings: z.boolean().optional()
    })
    .strict()

export default UserCountOutputTypeSelectSchema
