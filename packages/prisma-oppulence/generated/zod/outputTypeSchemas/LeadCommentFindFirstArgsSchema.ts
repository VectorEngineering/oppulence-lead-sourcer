import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCommentIncludeSchema } from '../inputTypeSchemas/LeadCommentIncludeSchema'
import { LeadCommentWhereInputSchema } from '../inputTypeSchemas/LeadCommentWhereInputSchema'
import { LeadCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCommentOrderByWithRelationInputSchema'
import { LeadCommentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCommentWhereUniqueInputSchema'
import { LeadCommentScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCommentScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadCommentSelectSchema: z.ZodType<Prisma.LeadCommentSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  content: z.boolean().optional(),
  type: z.boolean().optional(),
  visibility: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadCommentFindFirstArgsSchema: z.ZodType<Prisma.LeadCommentFindFirstArgs> = z.object({
  select: LeadCommentSelectSchema.optional(),
  include: LeadCommentIncludeSchema.optional(),
  where: LeadCommentWhereInputSchema.optional(),
  orderBy: z.union([ LeadCommentOrderByWithRelationInputSchema.array(),LeadCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadCommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadCommentScalarFieldEnumSchema,LeadCommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadCommentFindFirstArgsSchema;
