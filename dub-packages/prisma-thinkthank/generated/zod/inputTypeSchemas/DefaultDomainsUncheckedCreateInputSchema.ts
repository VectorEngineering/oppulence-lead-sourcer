import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DefaultDomainsUncheckedCreateInputSchema: z.ZodType<Prisma.DefaultDomainsUncheckedCreateInput> = z.object({
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
  loooooooong: z.boolean().optional(),
  projectId: z.string()
}).strict();

export default DefaultDomainsUncheckedCreateInputSchema;
