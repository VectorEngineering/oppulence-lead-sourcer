import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookFindManyArgsSchema } from '../outputTypeSchemas/WebhookFindManyArgsSchema'
import { BankConnectionArgsSchema } from '../outputTypeSchemas/BankConnectionArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { BankConnectionSettingsCountOutputTypeArgsSchema } from '../outputTypeSchemas/BankConnectionSettingsCountOutputTypeArgsSchema'

export const BankConnectionSettingsIncludeSchema: z.ZodType<Prisma.BankConnectionSettingsInclude> = z
    .object({
        webhooks: z.union([z.boolean(), z.lazy(() => WebhookFindManyArgsSchema)]).optional(),
        bankConnection: z.union([z.boolean(), z.lazy(() => BankConnectionArgsSchema)]).optional(),
        creator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => BankConnectionSettingsCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default BankConnectionSettingsIncludeSchema
