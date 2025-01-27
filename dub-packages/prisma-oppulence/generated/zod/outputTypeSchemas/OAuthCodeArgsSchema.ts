import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthCodeSelectSchema } from '../inputTypeSchemas/OAuthCodeSelectSchema';
import { OAuthCodeIncludeSchema } from '../inputTypeSchemas/OAuthCodeIncludeSchema';

export const OAuthCodeArgsSchema: z.ZodType<Prisma.OAuthCodeDefaultArgs> = z.object({
  select: z.lazy(() => OAuthCodeSelectSchema).optional(),
  include: z.lazy(() => OAuthCodeIncludeSchema).optional(),
}).strict();

export default OAuthCodeArgsSchema;
