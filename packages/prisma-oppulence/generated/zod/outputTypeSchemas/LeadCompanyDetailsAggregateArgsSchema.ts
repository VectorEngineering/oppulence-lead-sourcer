import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompanyDetailsWhereInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsWhereInputSchema'
import { LeadCompanyDetailsOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsOrderByWithRelationInputSchema'
import { LeadCompanyDetailsWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsWhereUniqueInputSchema'

export const LeadCompanyDetailsAggregateArgsSchema: z.ZodType<Prisma.LeadCompanyDetailsAggregateArgs> = z.object({
  where: LeadCompanyDetailsWhereInputSchema.optional(),
  orderBy: z.union([ LeadCompanyDetailsOrderByWithRelationInputSchema.array(),LeadCompanyDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadCompanyDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadCompanyDetailsAggregateArgsSchema;
