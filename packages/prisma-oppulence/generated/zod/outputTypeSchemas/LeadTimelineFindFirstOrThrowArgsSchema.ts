import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTimelineIncludeSchema } from '../inputTypeSchemas/LeadTimelineIncludeSchema'
import { LeadTimelineWhereInputSchema } from '../inputTypeSchemas/LeadTimelineWhereInputSchema'
import { LeadTimelineOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadTimelineOrderByWithRelationInputSchema'
import { LeadTimelineWhereUniqueInputSchema } from '../inputTypeSchemas/LeadTimelineWhereUniqueInputSchema'
import { LeadTimelineScalarFieldEnumSchema } from '../inputTypeSchemas/LeadTimelineScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadTimelineSelectSchema: z.ZodType<Prisma.LeadTimelineSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  milestone: z.boolean().optional(),
  targetDate: z.boolean().optional(),
  actualDate: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadTimelineFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadTimelineFindFirstOrThrowArgs> = z.object({
  select: LeadTimelineSelectSchema.optional(),
  include: LeadTimelineIncludeSchema.optional(),
  where: LeadTimelineWhereInputSchema.optional(),
  orderBy: z.union([ LeadTimelineOrderByWithRelationInputSchema.array(),LeadTimelineOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadTimelineWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadTimelineScalarFieldEnumSchema,LeadTimelineScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadTimelineFindFirstOrThrowArgsSchema;
