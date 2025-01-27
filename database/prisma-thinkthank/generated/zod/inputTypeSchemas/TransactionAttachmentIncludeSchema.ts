import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionArgsSchema } from '../outputTypeSchemas/TransactionArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { InboxFindManyArgsSchema } from '../outputTypeSchemas/InboxFindManyArgsSchema'
import { TransactionAttachmentCountOutputTypeArgsSchema } from '../outputTypeSchemas/TransactionAttachmentCountOutputTypeArgsSchema'

export const TransactionAttachmentIncludeSchema: z.ZodType<Prisma.TransactionAttachmentInclude> = z
    .object({
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        inbox: z.union([z.boolean(), z.lazy(() => InboxFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TransactionAttachmentCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default TransactionAttachmentIncludeSchema
