import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  links: z.boolean().optional(),
  CustomerTag: z.boolean().optional(),
  Transaction: z.boolean().optional(),
  BankAccount: z.boolean().optional(),
}).strict();

export default TagCountOutputTypeSelectSchema;
