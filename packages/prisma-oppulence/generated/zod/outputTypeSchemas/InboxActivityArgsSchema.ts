import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxActivitySelectSchema } from '../inputTypeSchemas/InboxActivitySelectSchema';
import { InboxActivityIncludeSchema } from '../inputTypeSchemas/InboxActivityIncludeSchema';

export const InboxActivityArgsSchema: z.ZodType<Prisma.InboxActivityDefaultArgs> = z.object({
  select: z.lazy(() => InboxActivitySelectSchema).optional(),
  include: z.lazy(() => InboxActivityIncludeSchema).optional(),
}).strict();

export default InboxActivityArgsSchema;
