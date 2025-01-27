import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkCountOutputTypeSelectSchema } from './LinkCountOutputTypeSelectSchema';

export const LinkCountOutputTypeArgsSchema: z.ZodType<Prisma.LinkCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LinkCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LinkCountOutputTypeSelectSchema;
