import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceTemplateWhereInputSchema } from '../inputTypeSchemas/InvoiceTemplateWhereInputSchema'
import { InvoiceTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvoiceTemplateOrderByWithRelationInputSchema'
import { InvoiceTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceTemplateWhereUniqueInputSchema'

export const InvoiceTemplateAggregateArgsSchema: z.ZodType<Prisma.InvoiceTemplateAggregateArgs> = z.object({
  where: InvoiceTemplateWhereInputSchema.optional(),
  orderBy: z.union([ InvoiceTemplateOrderByWithRelationInputSchema.array(),InvoiceTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: InvoiceTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InvoiceTemplateAggregateArgsSchema;
