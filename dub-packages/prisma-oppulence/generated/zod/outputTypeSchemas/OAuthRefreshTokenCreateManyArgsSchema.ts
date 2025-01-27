import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthRefreshTokenCreateManyInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenCreateManyInputSchema'

export const OAuthRefreshTokenCreateManyArgsSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateManyArgs> = z.object({
  data: z.union([ OAuthRefreshTokenCreateManyInputSchema,OAuthRefreshTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default OAuthRefreshTokenCreateManyArgsSchema;
