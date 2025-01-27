import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealHistoryIncludeSchema } from '../inputTypeSchemas/DealHistoryIncludeSchema'
import { DealHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/DealHistoryWhereUniqueInputSchema'
import { DealArgsSchema } from "../outputTypeSchemas/DealArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealHistorySelectSchema: z.ZodType<Prisma.DealHistorySelect> = z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  field: z.boolean().optional(),
  oldValue: z.boolean().optional(),
  newValue: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  deal: z.union([z.boolean(),z.lazy(() => DealArgsSchema)]).optional(),
}).strict()

export const DealHistoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DealHistoryFindUniqueOrThrowArgs> = z.object({
  select: DealHistorySelectSchema.optional(),
  include: DealHistoryIncludeSchema.optional(),
  where: DealHistoryWhereUniqueInputSchema,
}).strict() ;

export default DealHistoryFindUniqueOrThrowArgsSchema;
