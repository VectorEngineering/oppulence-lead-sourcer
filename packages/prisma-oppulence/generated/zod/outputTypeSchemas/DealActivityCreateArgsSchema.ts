import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealActivityIncludeSchema } from '../inputTypeSchemas/DealActivityIncludeSchema'
import { DealActivityCreateInputSchema } from '../inputTypeSchemas/DealActivityCreateInputSchema'
import { DealActivityUncheckedCreateInputSchema } from '../inputTypeSchemas/DealActivityUncheckedCreateInputSchema'
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

export const DealActivityCreateArgsSchema: z.ZodType<Prisma.DealActivityCreateArgs> = z.object({
  select: DealActivitySelectSchema.optional(),
  include: DealActivityIncludeSchema.optional(),
  data: z.union([ DealActivityCreateInputSchema,DealActivityUncheckedCreateInputSchema ]),
}).strict() ;

export default DealActivityCreateArgsSchema;
