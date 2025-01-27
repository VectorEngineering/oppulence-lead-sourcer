import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkSelectSchema } from '../inputTypeSchemas/LinkSelectSchema';
import { LinkIncludeSchema } from '../inputTypeSchemas/LinkIncludeSchema';

export const LinkArgsSchema: z.ZodType<Prisma.LinkDefaultArgs> = z.object({
  select: z.lazy(() => LinkSelectSchema).optional(),
  include: z.lazy(() => LinkIncludeSchema).optional(),
}).strict();

export default LinkArgsSchema;
