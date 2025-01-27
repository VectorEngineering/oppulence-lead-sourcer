import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankAccountCountOutputTypeSelectSchema } from './BankAccountCountOutputTypeSelectSchema';

export const BankAccountCountOutputTypeArgsSchema: z.ZodType<Prisma.BankAccountCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BankAccountCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BankAccountCountOutputTypeSelectSchema;
