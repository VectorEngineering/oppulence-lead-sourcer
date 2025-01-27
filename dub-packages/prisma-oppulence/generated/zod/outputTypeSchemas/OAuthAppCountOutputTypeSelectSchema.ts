import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OAuthAppCountOutputTypeSelectSchema: z.ZodType<Prisma.OAuthAppCountOutputTypeSelect> = z.object({
  oAuthCodes: z.boolean().optional(),
}).strict();

export default OAuthAppCountOutputTypeSelectSchema;
