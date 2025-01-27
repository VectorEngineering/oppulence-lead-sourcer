import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  links: z.boolean().optional(),
  CustomerTag: z.boolean().optional(),
  Lead: z.boolean().optional(),
}).strict();

export default TagCountOutputTypeSelectSchema;
