import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthRefreshTokenUpdateManyMutationInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenUpdateManyMutationInputSchema'
import { OAuthRefreshTokenUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenUncheckedUpdateManyInputSchema'
import { OAuthRefreshTokenWhereInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenWhereInputSchema'

export const OAuthRefreshTokenUpdateManyArgsSchema: z.ZodType<Prisma.OAuthRefreshTokenUpdateManyArgs> = z.object({
  data: z.union([ OAuthRefreshTokenUpdateManyMutationInputSchema,OAuthRefreshTokenUncheckedUpdateManyInputSchema ]),
  where: OAuthRefreshTokenWhereInputSchema.optional(),
}).strict() ;

export default OAuthRefreshTokenUpdateManyArgsSchema;
