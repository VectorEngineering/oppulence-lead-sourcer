import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthAppSelectSchema } from '../inputTypeSchemas/OAuthAppSelectSchema';
import { OAuthAppIncludeSchema } from '../inputTypeSchemas/OAuthAppIncludeSchema';

export const OAuthAppArgsSchema: z.ZodType<Prisma.OAuthAppDefaultArgs> = z.object({
  select: z.lazy(() => OAuthAppSelectSchema).optional(),
  include: z.lazy(() => OAuthAppIncludeSchema).optional(),
}).strict();

export default OAuthAppArgsSchema;
