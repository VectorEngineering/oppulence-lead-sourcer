import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadLabelIncludeSchema } from '../inputTypeSchemas/LeadLabelIncludeSchema'
import { LeadLabelWhereInputSchema } from '../inputTypeSchemas/LeadLabelWhereInputSchema'
import { LeadLabelOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadLabelOrderByWithRelationInputSchema'
import { LeadLabelWhereUniqueInputSchema } from '../inputTypeSchemas/LeadLabelWhereUniqueInputSchema'
import { LeadLabelScalarFieldEnumSchema } from '../inputTypeSchemas/LeadLabelScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadLabelSelectSchema: z.ZodType<Prisma.LeadLabelSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadLabelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadLabelFindFirstOrThrowArgs> = z.object({
  select: LeadLabelSelectSchema.optional(),
  include: LeadLabelIncludeSchema.optional(),
  where: LeadLabelWhereInputSchema.optional(),
  orderBy: z.union([ LeadLabelOrderByWithRelationInputSchema.array(),LeadLabelOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadLabelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadLabelScalarFieldEnumSchema,LeadLabelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadLabelFindFirstOrThrowArgsSchema;
