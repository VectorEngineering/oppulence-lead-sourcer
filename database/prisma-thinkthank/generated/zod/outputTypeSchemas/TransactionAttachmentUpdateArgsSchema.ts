import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionAttachmentIncludeSchema } from '../inputTypeSchemas/TransactionAttachmentIncludeSchema'
import { TransactionAttachmentUpdateInputSchema } from '../inputTypeSchemas/TransactionAttachmentUpdateInputSchema'
import { TransactionAttachmentUncheckedUpdateInputSchema } from '../inputTypeSchemas/TransactionAttachmentUncheckedUpdateInputSchema'
import { TransactionAttachmentWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionAttachmentWhereUniqueInputSchema'
import { TransactionArgsSchema } from '../outputTypeSchemas/TransactionArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { InboxFindManyArgsSchema } from '../outputTypeSchemas/InboxFindManyArgsSchema'
import { TransactionAttachmentCountOutputTypeArgsSchema } from '../outputTypeSchemas/TransactionAttachmentCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionAttachmentSelectSchema: z.ZodType<Prisma.TransactionAttachmentSelect> = z
    .object({
        id: z.boolean().optional(),
        transactionId: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        type: z.boolean().optional(),
        category: z.boolean().optional(),
        path: z.boolean().optional(),
        size: z.boolean().optional(),
        mimeType: z.boolean().optional(),
        hash: z.boolean().optional(),
        metadata: z.boolean().optional(),
        isConfidential: z.boolean().optional(),
        status: z.boolean().optional(),
        processingErrors: z.boolean().optional(),
        ocrText: z.boolean().optional(),
        analysisResults: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        projectId: z.boolean().optional(),
        blob: z.boolean().optional(),
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        inbox: z.union([z.boolean(), z.lazy(() => InboxFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TransactionAttachmentCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const TransactionAttachmentUpdateArgsSchema: z.ZodType<Prisma.TransactionAttachmentUpdateArgs> = z
    .object({
        select: TransactionAttachmentSelectSchema.optional(),
        include: TransactionAttachmentIncludeSchema.optional(),
        data: z.union([TransactionAttachmentUpdateInputSchema, TransactionAttachmentUncheckedUpdateInputSchema]),
        where: TransactionAttachmentWhereUniqueInputSchema
    })
    .strict()

export default TransactionAttachmentUpdateArgsSchema
