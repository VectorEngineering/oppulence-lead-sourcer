import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceAttachmentIncludeSchema } from '../inputTypeSchemas/InvoiceAttachmentIncludeSchema'
import { InvoiceAttachmentWhereInputSchema } from '../inputTypeSchemas/InvoiceAttachmentWhereInputSchema'
import { InvoiceAttachmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvoiceAttachmentOrderByWithRelationInputSchema'
import { InvoiceAttachmentWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceAttachmentWhereUniqueInputSchema'
import { InvoiceAttachmentScalarFieldEnumSchema } from '../inputTypeSchemas/InvoiceAttachmentScalarFieldEnumSchema'
import { InvoiceArgsSchema } from '../outputTypeSchemas/InvoiceArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceAttachmentSelectSchema: z.ZodType<Prisma.InvoiceAttachmentSelect> = z
    .object({
        id: z.boolean().optional(),
        invoiceId: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        type: z.boolean().optional(),
        path: z.boolean().optional(),
        size: z.boolean().optional(),
        mimeType: z.boolean().optional(),
        metadata: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        invoice: z.union([z.boolean(), z.lazy(() => InvoiceArgsSchema)]).optional()
    })
    .strict()

export const InvoiceAttachmentFindManyArgsSchema: z.ZodType<Prisma.InvoiceAttachmentFindManyArgs> = z
    .object({
        select: InvoiceAttachmentSelectSchema.optional(),
        include: InvoiceAttachmentIncludeSchema.optional(),
        where: InvoiceAttachmentWhereInputSchema.optional(),
        orderBy: z
            .union([InvoiceAttachmentOrderByWithRelationInputSchema.array(), InvoiceAttachmentOrderByWithRelationInputSchema])
            .optional(),
        cursor: InvoiceAttachmentWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([InvoiceAttachmentScalarFieldEnumSchema, InvoiceAttachmentScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default InvoiceAttachmentFindManyArgsSchema
