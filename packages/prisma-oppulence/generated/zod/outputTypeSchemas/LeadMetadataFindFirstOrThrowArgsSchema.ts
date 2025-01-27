import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadMetadataIncludeSchema } from '../inputTypeSchemas/LeadMetadataIncludeSchema'
import { LeadMetadataWhereInputSchema } from '../inputTypeSchemas/LeadMetadataWhereInputSchema'
import { LeadMetadataOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadMetadataOrderByWithRelationInputSchema'
import { LeadMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/LeadMetadataWhereUniqueInputSchema'
import { LeadMetadataScalarFieldEnumSchema } from '../inputTypeSchemas/LeadMetadataScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadMetadataSelectSchema: z.ZodType<Prisma.LeadMetadataSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  key: z.boolean().optional(),
  value: z.boolean().optional(),
  type: z.boolean().optional(),
  category: z.boolean().optional(),
  description: z.boolean().optional(),
  isSearchable: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadMetadataFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadMetadataFindFirstOrThrowArgs> = z.object({
  select: LeadMetadataSelectSchema.optional(),
  include: LeadMetadataIncludeSchema.optional(),
  where: LeadMetadataWhereInputSchema.optional(),
  orderBy: z.union([ LeadMetadataOrderByWithRelationInputSchema.array(),LeadMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadMetadataScalarFieldEnumSchema,LeadMetadataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadMetadataFindFirstOrThrowArgsSchema;
