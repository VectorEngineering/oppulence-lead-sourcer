import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealProductIncludeSchema } from '../inputTypeSchemas/DealProductIncludeSchema'
import { DealProductWhereInputSchema } from '../inputTypeSchemas/DealProductWhereInputSchema'
import { DealProductOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealProductOrderByWithRelationInputSchema'
import { DealProductWhereUniqueInputSchema } from '../inputTypeSchemas/DealProductWhereUniqueInputSchema'
import { DealProductScalarFieldEnumSchema } from '../inputTypeSchemas/DealProductScalarFieldEnumSchema'
import { DealArgsSchema } from "../outputTypeSchemas/DealArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealProductSelectSchema: z.ZodType<Prisma.DealProductSelect> = z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  productId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  discount: z.boolean().optional(),
  total: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deal: z.union([z.boolean(),z.lazy(() => DealArgsSchema)]).optional(),
}).strict()

export const DealProductFindManyArgsSchema: z.ZodType<Prisma.DealProductFindManyArgs> = z.object({
  select: DealProductSelectSchema.optional(),
  include: DealProductIncludeSchema.optional(),
  where: DealProductWhereInputSchema.optional(),
  orderBy: z.union([ DealProductOrderByWithRelationInputSchema.array(),DealProductOrderByWithRelationInputSchema ]).optional(),
  cursor: DealProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DealProductScalarFieldEnumSchema,DealProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DealProductFindManyArgsSchema;
