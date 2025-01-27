import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealTaskSelectSchema } from '../inputTypeSchemas/DealTaskSelectSchema';
import { DealTaskIncludeSchema } from '../inputTypeSchemas/DealTaskIncludeSchema';

export const DealTaskArgsSchema: z.ZodType<Prisma.DealTaskDefaultArgs> = z.object({
  select: z.lazy(() => DealTaskSelectSchema).optional(),
  include: z.lazy(() => DealTaskIncludeSchema).optional(),
}).strict();

export default DealTaskArgsSchema;
