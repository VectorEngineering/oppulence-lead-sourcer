import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramEnrollmentWhereInputSchema } from '../inputTypeSchemas/ProgramEnrollmentWhereInputSchema'
import { ProgramEnrollmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProgramEnrollmentOrderByWithAggregationInputSchema'
import { ProgramEnrollmentScalarFieldEnumSchema } from '../inputTypeSchemas/ProgramEnrollmentScalarFieldEnumSchema'
import { ProgramEnrollmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProgramEnrollmentScalarWhereWithAggregatesInputSchema'

export const ProgramEnrollmentGroupByArgsSchema: z.ZodType<Prisma.ProgramEnrollmentGroupByArgs> = z.object({
  where: ProgramEnrollmentWhereInputSchema.optional(),
  orderBy: z.union([ ProgramEnrollmentOrderByWithAggregationInputSchema.array(),ProgramEnrollmentOrderByWithAggregationInputSchema ]).optional(),
  by: ProgramEnrollmentScalarFieldEnumSchema.array(),
  having: ProgramEnrollmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ProgramEnrollmentGroupByArgsSchema;
