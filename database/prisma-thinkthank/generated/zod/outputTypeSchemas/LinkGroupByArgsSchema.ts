import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkWhereInputSchema } from '../inputTypeSchemas/LinkWhereInputSchema'
import { LinkOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LinkOrderByWithAggregationInputSchema'
import { LinkScalarFieldEnumSchema } from '../inputTypeSchemas/LinkScalarFieldEnumSchema'
import { LinkScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LinkScalarWhereWithAggregatesInputSchema'

export const LinkGroupByArgsSchema: z.ZodType<Prisma.LinkGroupByArgs> = z.object({
  where: LinkWhereInputSchema.optional(),
  orderBy: z.union([ LinkOrderByWithAggregationInputSchema.array(),LinkOrderByWithAggregationInputSchema ]).optional(),
  by: LinkScalarFieldEnumSchema.array(),
  having: LinkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LinkGroupByArgsSchema;
