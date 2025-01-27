import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthAppWhereInputSchema } from '../inputTypeSchemas/OAuthAppWhereInputSchema'
import { OAuthAppOrderByWithRelationInputSchema } from '../inputTypeSchemas/OAuthAppOrderByWithRelationInputSchema'
import { OAuthAppWhereUniqueInputSchema } from '../inputTypeSchemas/OAuthAppWhereUniqueInputSchema'

export const OAuthAppAggregateArgsSchema: z.ZodType<Prisma.OAuthAppAggregateArgs> = z.object({
  where: OAuthAppWhereInputSchema.optional(),
  orderBy: z.union([ OAuthAppOrderByWithRelationInputSchema.array(),OAuthAppOrderByWithRelationInputSchema ]).optional(),
  cursor: OAuthAppWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OAuthAppAggregateArgsSchema;
