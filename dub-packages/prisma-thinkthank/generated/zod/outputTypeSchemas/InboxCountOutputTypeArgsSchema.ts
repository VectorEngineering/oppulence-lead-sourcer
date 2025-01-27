import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxCountOutputTypeSelectSchema } from './InboxCountOutputTypeSelectSchema';

export const InboxCountOutputTypeArgsSchema: z.ZodType<Prisma.InboxCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => InboxCountOutputTypeSelectSchema).nullish(),
}).strict();

export default InboxCountOutputTypeSelectSchema;
