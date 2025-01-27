import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRiskIncludeSchema } from '../inputTypeSchemas/LeadRiskIncludeSchema'
import { LeadRiskUpdateInputSchema } from '../inputTypeSchemas/LeadRiskUpdateInputSchema'
import { LeadRiskUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadRiskUncheckedUpdateInputSchema'
import { LeadRiskWhereUniqueInputSchema } from '../inputTypeSchemas/LeadRiskWhereUniqueInputSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadRiskSelectSchema: z.ZodType<Prisma.LeadRiskSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  category: z.boolean().optional(),
  description: z.boolean().optional(),
  impact: z.boolean().optional(),
  probability: z.boolean().optional(),
  mitigation: z.boolean().optional(),
  status: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadRiskUpdateArgsSchema: z.ZodType<Prisma.LeadRiskUpdateArgs> = z.object({
  select: LeadRiskSelectSchema.optional(),
  include: LeadRiskIncludeSchema.optional(),
  data: z.union([ LeadRiskUpdateInputSchema,LeadRiskUncheckedUpdateInputSchema ]),
  where: LeadRiskWhereUniqueInputSchema,
}).strict() ;

export default LeadRiskUpdateArgsSchema;
