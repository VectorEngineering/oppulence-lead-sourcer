import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadNurturingIncludeSchema } from '../inputTypeSchemas/LeadNurturingIncludeSchema'
import { LeadNurturingWhereInputSchema } from '../inputTypeSchemas/LeadNurturingWhereInputSchema'
import { LeadNurturingOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadNurturingOrderByWithRelationInputSchema'
import { LeadNurturingWhereUniqueInputSchema } from '../inputTypeSchemas/LeadNurturingWhereUniqueInputSchema'
import { LeadNurturingScalarFieldEnumSchema } from '../inputTypeSchemas/LeadNurturingScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadNurturingSelectSchema: z.ZodType<Prisma.LeadNurturingSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  program: z.boolean().optional(),
  stage: z.boolean().optional(),
  status: z.boolean().optional(),
  contentViewed: z.boolean().optional(),
  emailsOpened: z.boolean().optional(),
  websiteVisits: z.boolean().optional(),
  engagementScore: z.boolean().optional(),
  responseRate: z.boolean().optional(),
  lastEngagement: z.boolean().optional(),
  currentStep: z.boolean().optional(),
  completedSteps: z.boolean().optional(),
  nextActions: z.boolean().optional(),
  automationFlows: z.boolean().optional(),
  triggers: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadNurturingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadNurturingFindFirstOrThrowArgs> = z.object({
  select: LeadNurturingSelectSchema.optional(),
  include: LeadNurturingIncludeSchema.optional(),
  where: LeadNurturingWhereInputSchema.optional(),
  orderBy: z.union([ LeadNurturingOrderByWithRelationInputSchema.array(),LeadNurturingOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadNurturingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadNurturingScalarFieldEnumSchema,LeadNurturingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadNurturingFindFirstOrThrowArgsSchema;
