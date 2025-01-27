import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealActivityIncludeSchema } from '../inputTypeSchemas/DealActivityIncludeSchema'
import { DealActivityWhereInputSchema } from '../inputTypeSchemas/DealActivityWhereInputSchema'
import { DealActivityOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealActivityOrderByWithRelationInputSchema'
import { DealActivityWhereUniqueInputSchema } from '../inputTypeSchemas/DealActivityWhereUniqueInputSchema'
import { DealActivityScalarFieldEnumSchema } from '../inputTypeSchemas/DealActivityScalarFieldEnumSchema'
import { DealArgsSchema } from "../outputTypeSchemas/DealArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealActivitySelectSchema: z.ZodType<Prisma.DealActivitySelect> = z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  type: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  outcome: z.boolean().optional(),
  duration: z.boolean().optional(),
  scheduledAt: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  deal: z.union([z.boolean(),z.lazy(() => DealArgsSchema)]).optional(),
}).strict()

export const DealActivityFindManyArgsSchema: z.ZodType<Prisma.DealActivityFindManyArgs> = z.object({
  select: DealActivitySelectSchema.optional(),
  include: DealActivityIncludeSchema.optional(),
  where: DealActivityWhereInputSchema.optional(),
  orderBy: z.union([ DealActivityOrderByWithRelationInputSchema.array(),DealActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: DealActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DealActivityScalarFieldEnumSchema,DealActivityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DealActivityFindManyArgsSchema;
