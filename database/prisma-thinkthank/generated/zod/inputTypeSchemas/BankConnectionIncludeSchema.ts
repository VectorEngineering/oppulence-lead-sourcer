import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionSettingsArgsSchema } from '../outputTypeSchemas/BankConnectionSettingsArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { BankAccountFindManyArgsSchema } from '../outputTypeSchemas/BankAccountFindManyArgsSchema'
import { BankConnectionCountOutputTypeArgsSchema } from '../outputTypeSchemas/BankConnectionCountOutputTypeArgsSchema'

export const BankConnectionIncludeSchema: z.ZodType<Prisma.BankConnectionInclude> = z
    .object({
        settings: z.union([z.boolean(), z.lazy(() => BankConnectionSettingsArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        bankAccounts: z.union([z.boolean(), z.lazy(() => BankAccountFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => BankConnectionCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default BankConnectionIncludeSchema
