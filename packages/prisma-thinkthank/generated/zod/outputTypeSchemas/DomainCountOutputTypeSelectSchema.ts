import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DomainCountOutputTypeSelectSchema: z.ZodType<Prisma.DomainCountOutputTypeSelect> = z.object({
  links: z.boolean().optional(),
  programs: z.boolean().optional(),
}).strict();

export default DomainCountOutputTypeSelectSchema;
