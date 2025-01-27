import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadMetadataWhereInputSchema } from '../inputTypeSchemas/LeadMetadataWhereInputSchema'
import { LeadMetadataOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadMetadataOrderByWithRelationInputSchema'
import { LeadMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/LeadMetadataWhereUniqueInputSchema'

export const LeadMetadataAggregateArgsSchema: z.ZodType<Prisma.LeadMetadataAggregateArgs> = z.object({
  where: LeadMetadataWhereInputSchema.optional(),
  orderBy: z.union([ LeadMetadataOrderByWithRelationInputSchema.array(),LeadMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadMetadataAggregateArgsSchema;
