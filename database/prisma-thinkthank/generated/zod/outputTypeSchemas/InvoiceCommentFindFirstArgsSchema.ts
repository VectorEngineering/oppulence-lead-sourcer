import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCommentIncludeSchema } from '../inputTypeSchemas/InvoiceCommentIncludeSchema'
import { InvoiceCommentWhereInputSchema } from '../inputTypeSchemas/InvoiceCommentWhereInputSchema'
import { InvoiceCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvoiceCommentOrderByWithRelationInputSchema'
import { InvoiceCommentWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceCommentWhereUniqueInputSchema'
import { InvoiceCommentScalarFieldEnumSchema } from '../inputTypeSchemas/InvoiceCommentScalarFieldEnumSchema'
import { InvoiceArgsSchema } from "../outputTypeSchemas/InvoiceArgsSchema"
import { InvoiceCommentArgsSchema } from "../outputTypeSchemas/InvoiceCommentArgsSchema"
import { InvoiceCommentFindManyArgsSchema } from "../outputTypeSchemas/InvoiceCommentFindManyArgsSchema"
import { InvoiceCommentCountOutputTypeArgsSchema } from "../outputTypeSchemas/InvoiceCommentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceCommentSelectSchema: z.ZodType<Prisma.InvoiceCommentSelect> = z.object({
  id: z.boolean().optional(),
  invoiceId: z.boolean().optional(),
  content: z.boolean().optional(),
  type: z.boolean().optional(),
  visibility: z.boolean().optional(),
  title: z.boolean().optional(),
  priority: z.boolean().optional(),
  status: z.boolean().optional(),
  tags: z.boolean().optional(),
  metadata: z.boolean().optional(),
  attachments: z.boolean().optional(),
  mentions: z.boolean().optional(),
  formatting: z.boolean().optional(),
  parentId: z.boolean().optional(),
  threadPath: z.boolean().optional(),
  replyCount: z.boolean().optional(),
  isEdited: z.boolean().optional(),
  editedAt: z.boolean().optional(),
  lastReplyAt: z.boolean().optional(),
  resolvedAt: z.boolean().optional(),
  resolvedBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  updatedBy: z.boolean().optional(),
  invoice: z.union([z.boolean(),z.lazy(() => InvoiceArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => InvoiceCommentArgsSchema)]).optional(),
  replies: z.union([z.boolean(),z.lazy(() => InvoiceCommentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InvoiceCommentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const InvoiceCommentFindFirstArgsSchema: z.ZodType<Prisma.InvoiceCommentFindFirstArgs> = z.object({
  select: InvoiceCommentSelectSchema.optional(),
  include: InvoiceCommentIncludeSchema.optional(),
  where: InvoiceCommentWhereInputSchema.optional(),
  orderBy: z.union([ InvoiceCommentOrderByWithRelationInputSchema.array(),InvoiceCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: InvoiceCommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InvoiceCommentScalarFieldEnumSchema,InvoiceCommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default InvoiceCommentFindFirstArgsSchema;
