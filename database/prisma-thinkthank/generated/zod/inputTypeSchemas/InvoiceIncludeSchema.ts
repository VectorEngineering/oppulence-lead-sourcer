import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PayoutFindManyArgsSchema } from '../outputTypeSchemas/PayoutFindManyArgsSchema'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { CustomerArgsSchema } from '../outputTypeSchemas/CustomerArgsSchema'
import { InvoiceCommentFindManyArgsSchema } from '../outputTypeSchemas/InvoiceCommentFindManyArgsSchema'
import { InvoiceAttachmentFindManyArgsSchema } from '../outputTypeSchemas/InvoiceAttachmentFindManyArgsSchema'
import { InvoiceHistoryFindManyArgsSchema } from '../outputTypeSchemas/InvoiceHistoryFindManyArgsSchema'
import { InvoiceTemplateArgsSchema } from '../outputTypeSchemas/InvoiceTemplateArgsSchema'
import { InvoiceCountOutputTypeArgsSchema } from '../outputTypeSchemas/InvoiceCountOutputTypeArgsSchema'

export const InvoiceIncludeSchema: z.ZodType<Prisma.InvoiceInclude> = z
    .object({
        payouts: z.union([z.boolean(), z.lazy(() => PayoutFindManyArgsSchema)]).optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        workspace: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        customer: z.union([z.boolean(), z.lazy(() => CustomerArgsSchema)]).optional(),
        comments: z.union([z.boolean(), z.lazy(() => InvoiceCommentFindManyArgsSchema)]).optional(),
        attachments: z.union([z.boolean(), z.lazy(() => InvoiceAttachmentFindManyArgsSchema)]).optional(),
        history: z.union([z.boolean(), z.lazy(() => InvoiceHistoryFindManyArgsSchema)]).optional(),
        template: z.union([z.boolean(), z.lazy(() => InvoiceTemplateArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InvoiceCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default InvoiceIncludeSchema
