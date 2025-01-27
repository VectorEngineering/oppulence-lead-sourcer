import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSocialProfileWhereInputSchema } from '../inputTypeSchemas/LeadSocialProfileWhereInputSchema'
import { LeadSocialProfileOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadSocialProfileOrderByWithRelationInputSchema'
import { LeadSocialProfileWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSocialProfileWhereUniqueInputSchema'

export const LeadSocialProfileAggregateArgsSchema: z.ZodType<Prisma.LeadSocialProfileAggregateArgs> = z.object({
  where: LeadSocialProfileWhereInputSchema.optional(),
  orderBy: z.union([ LeadSocialProfileOrderByWithRelationInputSchema.array(),LeadSocialProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadSocialProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadSocialProfileAggregateArgsSchema;
