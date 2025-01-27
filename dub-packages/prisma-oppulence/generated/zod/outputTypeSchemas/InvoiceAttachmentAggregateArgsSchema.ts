import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceAttachmentWhereInputSchema } from '../inputTypeSchemas/InvoiceAttachmentWhereInputSchema'
import { InvoiceAttachmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvoiceAttachmentOrderByWithRelationInputSchema'
import { InvoiceAttachmentWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceAttachmentWhereUniqueInputSchema'

export const InvoiceAttachmentAggregateArgsSchema: z.ZodType<Prisma.InvoiceAttachmentAggregateArgs> = z.object({
  where: InvoiceAttachmentWhereInputSchema.optional(),
  orderBy: z.union([ InvoiceAttachmentOrderByWithRelationInputSchema.array(),InvoiceAttachmentOrderByWithRelationInputSchema ]).optional(),
  cursor: InvoiceAttachmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InvoiceAttachmentAggregateArgsSchema;
