import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StageRequiredFieldWhereInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereInputSchema'
import { StageRequiredFieldOrderByWithAggregationInputSchema } from '../inputTypeSchemas/StageRequiredFieldOrderByWithAggregationInputSchema'
import { StageRequiredFieldScalarFieldEnumSchema } from '../inputTypeSchemas/StageRequiredFieldScalarFieldEnumSchema'
import { StageRequiredFieldScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/StageRequiredFieldScalarWhereWithAggregatesInputSchema'

export const StageRequiredFieldGroupByArgsSchema: z.ZodType<Prisma.StageRequiredFieldGroupByArgs> = z.object({
  where: StageRequiredFieldWhereInputSchema.optional(),
  orderBy: z.union([ StageRequiredFieldOrderByWithAggregationInputSchema.array(),StageRequiredFieldOrderByWithAggregationInputSchema ]).optional(),
  by: StageRequiredFieldScalarFieldEnumSchema.array(),
  having: StageRequiredFieldScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default StageRequiredFieldGroupByArgsSchema;
