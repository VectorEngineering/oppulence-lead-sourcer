import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestrictedTokenCountOutputTypeSelectSchema } from './RestrictedTokenCountOutputTypeSelectSchema';

export const RestrictedTokenCountOutputTypeArgsSchema: z.ZodType<Prisma.RestrictedTokenCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RestrictedTokenCountOutputTypeSelectSchema).nullish(),
}).strict();

export default RestrictedTokenCountOutputTypeSelectSchema;
