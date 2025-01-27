import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadMetadataIncludeSchema } from '../inputTypeSchemas/LeadMetadataIncludeSchema'
import { LeadMetadataUpdateInputSchema } from '../inputTypeSchemas/LeadMetadataUpdateInputSchema'
import { LeadMetadataUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadMetadataUncheckedUpdateInputSchema'
import { LeadMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/LeadMetadataWhereUniqueInputSchema'
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

export const LeadMetadataUpdateArgsSchema: z.ZodType<Prisma.LeadMetadataUpdateArgs> = z.object({
  select: LeadMetadataSelectSchema.optional(),
  include: LeadMetadataIncludeSchema.optional(),
  data: z.union([ LeadMetadataUpdateInputSchema,LeadMetadataUncheckedUpdateInputSchema ]),
  where: LeadMetadataWhereUniqueInputSchema,
}).strict() ;

export default LeadMetadataUpdateArgsSchema;
