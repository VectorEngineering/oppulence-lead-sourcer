import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealCompetitorIncludeSchema } from '../inputTypeSchemas/DealCompetitorIncludeSchema'
import { DealCompetitorCreateInputSchema } from '../inputTypeSchemas/DealCompetitorCreateInputSchema'
import { DealCompetitorUncheckedCreateInputSchema } from '../inputTypeSchemas/DealCompetitorUncheckedCreateInputSchema'
import { DealArgsSchema } from "../outputTypeSchemas/DealArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealCompetitorSelectSchema: z.ZodType<Prisma.DealCompetitorSelect> = z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  name: z.boolean().optional(),
  strengths: z.boolean().optional(),
  weaknesses: z.boolean().optional(),
  strategy: z.boolean().optional(),
  status: z.boolean().optional(),
  threatLevel: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deal: z.union([z.boolean(),z.lazy(() => DealArgsSchema)]).optional(),
}).strict()

export const DealCompetitorCreateArgsSchema: z.ZodType<Prisma.DealCompetitorCreateArgs> = z.object({
  select: DealCompetitorSelectSchema.optional(),
  include: DealCompetitorIncludeSchema.optional(),
  data: z.union([ DealCompetitorCreateInputSchema,DealCompetitorUncheckedCreateInputSchema ]),
}).strict() ;

export default DealCompetitorCreateArgsSchema;
