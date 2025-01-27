import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTaskIncludeSchema } from '../inputTypeSchemas/LeadTaskIncludeSchema'
import { LeadTaskWhereInputSchema } from '../inputTypeSchemas/LeadTaskWhereInputSchema'
import { LeadTaskOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadTaskOrderByWithRelationInputSchema'
import { LeadTaskWhereUniqueInputSchema } from '../inputTypeSchemas/LeadTaskWhereUniqueInputSchema'
import { LeadTaskScalarFieldEnumSchema } from '../inputTypeSchemas/LeadTaskScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadTaskSelectSchema: z.ZodType<Prisma.LeadTaskSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  priority: z.boolean().optional(),
  dueDate: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  assignedToId: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  updatedBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  assignedTo: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadTaskFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadTaskFindFirstOrThrowArgs> = z.object({
  select: LeadTaskSelectSchema.optional(),
  include: LeadTaskIncludeSchema.optional(),
  where: LeadTaskWhereInputSchema.optional(),
  orderBy: z.union([ LeadTaskOrderByWithRelationInputSchema.array(),LeadTaskOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadTaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadTaskScalarFieldEnumSchema,LeadTaskScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadTaskFindFirstOrThrowArgsSchema;
