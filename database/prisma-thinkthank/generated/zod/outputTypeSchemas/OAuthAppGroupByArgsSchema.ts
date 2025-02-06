import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthAppWhereInputSchema } from '../inputTypeSchemas/OAuthAppWhereInputSchema'
import { OAuthAppOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OAuthAppOrderByWithAggregationInputSchema'
import { OAuthAppScalarFieldEnumSchema } from '../inputTypeSchemas/OAuthAppScalarFieldEnumSchema'
import { OAuthAppScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OAuthAppScalarWhereWithAggregatesInputSchema'

export const OAuthAppGroupByArgsSchema: z.ZodType<Prisma.OAuthAppGroupByArgs> = z.object({
  where: OAuthAppWhereInputSchema.optional(),
  orderBy: z.union([ OAuthAppOrderByWithAggregationInputSchema.array(),OAuthAppOrderByWithAggregationInputSchema ]).optional(),
  by: OAuthAppScalarFieldEnumSchema.array(),
  having: OAuthAppScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OAuthAppGroupByArgsSchema;
