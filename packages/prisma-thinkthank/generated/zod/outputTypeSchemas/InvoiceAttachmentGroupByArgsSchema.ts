import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceAttachmentWhereInputSchema } from '../inputTypeSchemas/InvoiceAttachmentWhereInputSchema'
import { InvoiceAttachmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InvoiceAttachmentOrderByWithAggregationInputSchema'
import { InvoiceAttachmentScalarFieldEnumSchema } from '../inputTypeSchemas/InvoiceAttachmentScalarFieldEnumSchema'
import { InvoiceAttachmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InvoiceAttachmentScalarWhereWithAggregatesInputSchema'

export const InvoiceAttachmentGroupByArgsSchema: z.ZodType<Prisma.InvoiceAttachmentGroupByArgs> = z.object({
  where: InvoiceAttachmentWhereInputSchema.optional(),
  orderBy: z.union([ InvoiceAttachmentOrderByWithAggregationInputSchema.array(),InvoiceAttachmentOrderByWithAggregationInputSchema ]).optional(),
  by: InvoiceAttachmentScalarFieldEnumSchema.array(),
  having: InvoiceAttachmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InvoiceAttachmentGroupByArgsSchema;
