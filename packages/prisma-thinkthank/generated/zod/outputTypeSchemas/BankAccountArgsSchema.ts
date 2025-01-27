import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankAccountSelectSchema } from '../inputTypeSchemas/BankAccountSelectSchema';
import { BankAccountIncludeSchema } from '../inputTypeSchemas/BankAccountIncludeSchema';

export const BankAccountArgsSchema: z.ZodType<Prisma.BankAccountDefaultArgs> = z.object({
  select: z.lazy(() => BankAccountSelectSchema).optional(),
  include: z.lazy(() => BankAccountIncludeSchema).optional(),
}).strict();

export default BankAccountArgsSchema;
