import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DefaultDomainsCreateWithoutProjectInputSchema: z.ZodType<Prisma.DefaultDomainsCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  oppulence: z.boolean().optional(),
  solomonai: z.boolean().optional(),
  thinkthank: z.boolean().optional(),
  dublink: z.boolean().optional(),
  dubsh: z.boolean().optional(),
  chatgpt: z.boolean().optional(),
  sptifi: z.boolean().optional(),
  gitnew: z.boolean().optional(),
  callink: z.boolean().optional(),
  amznid: z.boolean().optional(),
  ggllink: z.boolean().optional(),
  figpage: z.boolean().optional(),
  loooooooong: z.boolean().optional()
}).strict();

export default DefaultDomainsCreateWithoutProjectInputSchema;
