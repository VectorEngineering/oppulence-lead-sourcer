import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UtmTemplateWhereInputSchema } from '../inputTypeSchemas/UtmTemplateWhereInputSchema'
import { UtmTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/UtmTemplateOrderByWithRelationInputSchema'
import { UtmTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/UtmTemplateWhereUniqueInputSchema'

export const UtmTemplateAggregateArgsSchema: z.ZodType<Prisma.UtmTemplateAggregateArgs> = z.object({
  where: UtmTemplateWhereInputSchema.optional(),
  orderBy: z.union([ UtmTemplateOrderByWithRelationInputSchema.array(),UtmTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: UtmTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UtmTemplateAggregateArgsSchema;
