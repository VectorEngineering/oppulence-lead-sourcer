import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LogSelectSchema } from '../inputTypeSchemas/LogSelectSchema';
import { LogIncludeSchema } from '../inputTypeSchemas/LogIncludeSchema';

export const LogArgsSchema: z.ZodType<Prisma.LogDefaultArgs> = z.object({
  select: z.lazy(() => LogSelectSchema).optional(),
  include: z.lazy(() => LogIncludeSchema).optional(),
}).strict();

export default LogArgsSchema;
