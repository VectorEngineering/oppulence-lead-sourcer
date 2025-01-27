import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCommunicationIncludeSchema } from '../inputTypeSchemas/LeadCommunicationIncludeSchema'
import { LeadCommunicationWhereInputSchema } from '../inputTypeSchemas/LeadCommunicationWhereInputSchema'
import { LeadCommunicationOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCommunicationOrderByWithRelationInputSchema'
import { LeadCommunicationWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCommunicationWhereUniqueInputSchema'
import { LeadCommunicationScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCommunicationScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadCommunicationSelectSchema: z.ZodType<Prisma.LeadCommunicationSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  type: z.boolean().optional(),
  direction: z.boolean().optional(),
  subject: z.boolean().optional(),
  content: z.boolean().optional(),
  outcome: z.boolean().optional(),
  duration: z.boolean().optional(),
  scheduledAt: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadCommunicationFindFirstArgsSchema: z.ZodType<Prisma.LeadCommunicationFindFirstArgs> = z.object({
  select: LeadCommunicationSelectSchema.optional(),
  include: LeadCommunicationIncludeSchema.optional(),
  where: LeadCommunicationWhereInputSchema.optional(),
  orderBy: z.union([ LeadCommunicationOrderByWithRelationInputSchema.array(),LeadCommunicationOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadCommunicationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadCommunicationScalarFieldEnumSchema,LeadCommunicationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadCommunicationFindFirstArgsSchema;
