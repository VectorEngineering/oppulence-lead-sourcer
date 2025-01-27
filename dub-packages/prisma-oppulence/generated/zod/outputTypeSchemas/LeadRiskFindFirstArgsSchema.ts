import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRiskIncludeSchema } from '../inputTypeSchemas/LeadRiskIncludeSchema'
import { LeadRiskWhereInputSchema } from '../inputTypeSchemas/LeadRiskWhereInputSchema'
import { LeadRiskOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadRiskOrderByWithRelationInputSchema'
import { LeadRiskWhereUniqueInputSchema } from '../inputTypeSchemas/LeadRiskWhereUniqueInputSchema'
import { LeadRiskScalarFieldEnumSchema } from '../inputTypeSchemas/LeadRiskScalarFieldEnumSchema'
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

export const LeadRiskFindFirstArgsSchema: z.ZodType<Prisma.LeadRiskFindFirstArgs> = z.object({
  select: LeadRiskSelectSchema.optional(),
  include: LeadRiskIncludeSchema.optional(),
  where: LeadRiskWhereInputSchema.optional(),
  orderBy: z.union([ LeadRiskOrderByWithRelationInputSchema.array(),LeadRiskOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadRiskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadRiskScalarFieldEnumSchema,LeadRiskScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadRiskFindFirstArgsSchema;
