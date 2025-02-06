import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthCodeWhereInputSchema } from '../inputTypeSchemas/OAuthCodeWhereInputSchema'

export const OAuthCodeDeleteManyArgsSchema: z.ZodType<Prisma.OAuthCodeDeleteManyArgs> = z.object({
  where: OAuthCodeWhereInputSchema.optional(),
}).strict() ;

export default OAuthCodeDeleteManyArgsSchema;
