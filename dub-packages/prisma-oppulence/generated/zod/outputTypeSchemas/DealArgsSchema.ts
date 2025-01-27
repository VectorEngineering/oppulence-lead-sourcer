import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealSelectSchema } from '../inputTypeSchemas/DealSelectSchema';
import { DealIncludeSchema } from '../inputTypeSchemas/DealIncludeSchema';

export const DealArgsSchema: z.ZodType<Prisma.DealDefaultArgs> = z.object({
  select: z.lazy(() => DealSelectSchema).optional(),
  include: z.lazy(() => DealIncludeSchema).optional(),
}).strict();

export default DealArgsSchema;
