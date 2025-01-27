import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PayoutSelectSchema } from '../inputTypeSchemas/PayoutSelectSchema';
import { PayoutIncludeSchema } from '../inputTypeSchemas/PayoutIncludeSchema';

export const PayoutArgsSchema: z.ZodType<Prisma.PayoutDefaultArgs> = z.object({
  select: z.lazy(() => PayoutSelectSchema).optional(),
  include: z.lazy(() => PayoutIncludeSchema).optional(),
}).strict();

export default PayoutArgsSchema;
