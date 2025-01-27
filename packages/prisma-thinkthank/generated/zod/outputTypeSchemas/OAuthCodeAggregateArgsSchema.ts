import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthCodeWhereInputSchema } from '../inputTypeSchemas/OAuthCodeWhereInputSchema'
import { OAuthCodeOrderByWithRelationInputSchema } from '../inputTypeSchemas/OAuthCodeOrderByWithRelationInputSchema'
import { OAuthCodeWhereUniqueInputSchema } from '../inputTypeSchemas/OAuthCodeWhereUniqueInputSchema'

export const OAuthCodeAggregateArgsSchema: z.ZodType<Prisma.OAuthCodeAggregateArgs> = z.object({
  where: OAuthCodeWhereInputSchema.optional(),
  orderBy: z.union([ OAuthCodeOrderByWithRelationInputSchema.array(),OAuthCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: OAuthCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OAuthCodeAggregateArgsSchema;
