import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SentEmailSelectSchema } from '../inputTypeSchemas/SentEmailSelectSchema';
import { SentEmailIncludeSchema } from '../inputTypeSchemas/SentEmailIncludeSchema';

export const SentEmailArgsSchema: z.ZodType<Prisma.SentEmailDefaultArgs> = z.object({
  select: z.lazy(() => SentEmailSelectSchema).optional(),
  include: z.lazy(() => SentEmailIncludeSchema).optional(),
}).strict();

export default SentEmailArgsSchema;
