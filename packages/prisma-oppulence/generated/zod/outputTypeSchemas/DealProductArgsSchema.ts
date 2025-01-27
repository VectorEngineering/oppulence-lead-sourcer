import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealProductSelectSchema } from '../inputTypeSchemas/DealProductSelectSchema';
import { DealProductIncludeSchema } from '../inputTypeSchemas/DealProductIncludeSchema';

export const DealProductArgsSchema: z.ZodType<Prisma.DealProductDefaultArgs> = z.object({
  select: z.lazy(() => DealProductSelectSchema).optional(),
  include: z.lazy(() => DealProductIncludeSchema).optional(),
}).strict();

export default DealProductArgsSchema;
