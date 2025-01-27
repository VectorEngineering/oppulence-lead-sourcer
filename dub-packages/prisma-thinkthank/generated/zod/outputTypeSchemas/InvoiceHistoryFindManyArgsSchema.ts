import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceHistoryIncludeSchema } from '../inputTypeSchemas/InvoiceHistoryIncludeSchema'
import { InvoiceHistoryWhereInputSchema } from '../inputTypeSchemas/InvoiceHistoryWhereInputSchema'
import { InvoiceHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvoiceHistoryOrderByWithRelationInputSchema'
import { InvoiceHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceHistoryWhereUniqueInputSchema'
import { InvoiceHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/InvoiceHistoryScalarFieldEnumSchema'
import { InvoiceArgsSchema } from "../outputTypeSchemas/InvoiceArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceHistorySelectSchema: z.ZodType<Prisma.InvoiceHistorySelect> = z.object({
  id: z.boolean().optional(),
  invoiceId: z.boolean().optional(),
  action: z.boolean().optional(),
  description: z.boolean().optional(),
  changes: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  invoice: z.union([z.boolean(),z.lazy(() => InvoiceArgsSchema)]).optional(),
}).strict()

export const InvoiceHistoryFindManyArgsSchema: z.ZodType<Prisma.InvoiceHistoryFindManyArgs> = z.object({
  select: InvoiceHistorySelectSchema.optional(),
  include: InvoiceHistoryIncludeSchema.optional(),
  where: InvoiceHistoryWhereInputSchema.optional(),
  orderBy: z.union([ InvoiceHistoryOrderByWithRelationInputSchema.array(),InvoiceHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InvoiceHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InvoiceHistoryScalarFieldEnumSchema,InvoiceHistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default InvoiceHistoryFindManyArgsSchema;
