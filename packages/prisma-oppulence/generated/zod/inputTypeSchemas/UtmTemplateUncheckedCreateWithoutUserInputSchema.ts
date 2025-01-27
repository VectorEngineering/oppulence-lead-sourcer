import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UtmTemplateUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UtmTemplateUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  utm_source: z.string().optional().nullable(),
  utm_medium: z.string().optional().nullable(),
  utm_campaign: z.string().optional().nullable(),
  utm_term: z.string().optional().nullable(),
  utm_content: z.string().optional().nullable(),
  ref: z.string().optional().nullable(),
  projectId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UtmTemplateUncheckedCreateWithoutUserInputSchema;
