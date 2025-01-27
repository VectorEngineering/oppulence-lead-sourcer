import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UtmTemplateWhereInputSchema } from '../inputTypeSchemas/UtmTemplateWhereInputSchema'
import { UtmTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UtmTemplateOrderByWithAggregationInputSchema'
import { UtmTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/UtmTemplateScalarFieldEnumSchema'
import { UtmTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UtmTemplateScalarWhereWithAggregatesInputSchema'

export const UtmTemplateGroupByArgsSchema: z.ZodType<Prisma.UtmTemplateGroupByArgs> = z.object({
  where: UtmTemplateWhereInputSchema.optional(),
  orderBy: z.union([ UtmTemplateOrderByWithAggregationInputSchema.array(),UtmTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: UtmTemplateScalarFieldEnumSchema.array(),
  having: UtmTemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UtmTemplateGroupByArgsSchema;
