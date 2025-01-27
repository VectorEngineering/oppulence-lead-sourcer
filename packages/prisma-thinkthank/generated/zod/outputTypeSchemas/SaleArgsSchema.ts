import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleSelectSchema } from '../inputTypeSchemas/SaleSelectSchema';
import { SaleIncludeSchema } from '../inputTypeSchemas/SaleIncludeSchema';

export const SaleArgsSchema: z.ZodType<Prisma.SaleDefaultArgs> = z.object({
  select: z.lazy(() => SaleSelectSchema).optional(),
  include: z.lazy(() => SaleIncludeSchema).optional(),
}).strict();

export default SaleArgsSchema;
