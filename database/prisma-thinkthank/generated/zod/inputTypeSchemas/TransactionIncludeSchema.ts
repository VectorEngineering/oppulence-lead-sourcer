import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionCategoryArgsSchema } from '../outputTypeSchemas/TransactionCategoryArgsSchema'
import { BankAccountArgsSchema } from '../outputTypeSchemas/BankAccountArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { TransactionAttachmentFindManyArgsSchema } from '../outputTypeSchemas/TransactionAttachmentFindManyArgsSchema'
import { TagFindManyArgsSchema } from '../outputTypeSchemas/TagFindManyArgsSchema'
import { TransactionCommentFindManyArgsSchema } from '../outputTypeSchemas/TransactionCommentFindManyArgsSchema'
import { TransactionHistoryFindManyArgsSchema } from '../outputTypeSchemas/TransactionHistoryFindManyArgsSchema'
import { TransactionReconciliationMatchFindManyArgsSchema } from '../outputTypeSchemas/TransactionReconciliationMatchFindManyArgsSchema'
import { InboxFindManyArgsSchema } from '../outputTypeSchemas/InboxFindManyArgsSchema'
import { TransactionCountOutputTypeArgsSchema } from '../outputTypeSchemas/TransactionCountOutputTypeArgsSchema'

export const TransactionIncludeSchema: z.ZodType<Prisma.TransactionInclude> = z
    .object({
        category: z.union([z.boolean(), z.lazy(() => TransactionCategoryArgsSchema)]).optional(),
        bankAccount: z.union([z.boolean(), z.lazy(() => BankAccountArgsSchema)]).optional(),
        assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        attachments: z.union([z.boolean(), z.lazy(() => TransactionAttachmentFindManyArgsSchema)]).optional(),
        tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
        comments: z.union([z.boolean(), z.lazy(() => TransactionCommentFindManyArgsSchema)]).optional(),
        history: z.union([z.boolean(), z.lazy(() => TransactionHistoryFindManyArgsSchema)]).optional(),
        reconciliationMatches: z.union([z.boolean(), z.lazy(() => TransactionReconciliationMatchFindManyArgsSchema)]).optional(),
        Inbox: z.union([z.boolean(), z.lazy(() => InboxFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TransactionCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default TransactionIncludeSchema
