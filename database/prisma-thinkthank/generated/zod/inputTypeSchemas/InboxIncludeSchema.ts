import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { TransactionAttachmentArgsSchema } from '../outputTypeSchemas/TransactionAttachmentArgsSchema'
import { TransactionArgsSchema } from '../outputTypeSchemas/TransactionArgsSchema'
import { InboxArgsSchema } from '../outputTypeSchemas/InboxArgsSchema'
import { InboxFindManyArgsSchema } from '../outputTypeSchemas/InboxFindManyArgsSchema'
import { InboxActivityFindManyArgsSchema } from '../outputTypeSchemas/InboxActivityFindManyArgsSchema'
import { InboxShareFindManyArgsSchema } from '../outputTypeSchemas/InboxShareFindManyArgsSchema'
import { InboxLabelFindManyArgsSchema } from '../outputTypeSchemas/InboxLabelFindManyArgsSchema'
import { InboxCountOutputTypeArgsSchema } from '../outputTypeSchemas/InboxCountOutputTypeArgsSchema'

export const InboxIncludeSchema: z.ZodType<Prisma.InboxInclude> = z
    .object({
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        attachment: z.union([z.boolean(), z.lazy(() => TransactionAttachmentArgsSchema)]).optional(),
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional(),
        parent: z.union([z.boolean(), z.lazy(() => InboxArgsSchema)]).optional(),
        children: z.union([z.boolean(), z.lazy(() => InboxFindManyArgsSchema)]).optional(),
        activities: z.union([z.boolean(), z.lazy(() => InboxActivityFindManyArgsSchema)]).optional(),
        shares: z.union([z.boolean(), z.lazy(() => InboxShareFindManyArgsSchema)]).optional(),
        labels: z.union([z.boolean(), z.lazy(() => InboxLabelFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InboxCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default InboxIncludeSchema
