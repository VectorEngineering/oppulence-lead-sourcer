import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxLabelWhereInputSchema } from '../inputTypeSchemas/InboxLabelWhereInputSchema'
import { InboxLabelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InboxLabelOrderByWithAggregationInputSchema'
import { InboxLabelScalarFieldEnumSchema } from '../inputTypeSchemas/InboxLabelScalarFieldEnumSchema'
import { InboxLabelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InboxLabelScalarWhereWithAggregatesInputSchema'

export const InboxLabelGroupByArgsSchema: z.ZodType<Prisma.InboxLabelGroupByArgs> = z.object({
  where: InboxLabelWhereInputSchema.optional(),
  orderBy: z.union([ InboxLabelOrderByWithAggregationInputSchema.array(),InboxLabelOrderByWithAggregationInputSchema ]).optional(),
  by: InboxLabelScalarFieldEnumSchema.array(),
  having: InboxLabelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InboxLabelGroupByArgsSchema;
