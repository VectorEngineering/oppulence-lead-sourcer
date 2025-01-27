import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthRefreshTokenWhereInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenWhereInputSchema'
import { OAuthRefreshTokenOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenOrderByWithAggregationInputSchema'
import { OAuthRefreshTokenScalarFieldEnumSchema } from '../inputTypeSchemas/OAuthRefreshTokenScalarFieldEnumSchema'
import { OAuthRefreshTokenScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenScalarWhereWithAggregatesInputSchema'

export const OAuthRefreshTokenGroupByArgsSchema: z.ZodType<Prisma.OAuthRefreshTokenGroupByArgs> = z.object({
  where: OAuthRefreshTokenWhereInputSchema.optional(),
  orderBy: z.union([ OAuthRefreshTokenOrderByWithAggregationInputSchema.array(),OAuthRefreshTokenOrderByWithAggregationInputSchema ]).optional(),
  by: OAuthRefreshTokenScalarFieldEnumSchema.array(),
  having: OAuthRefreshTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OAuthRefreshTokenGroupByArgsSchema;
