import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DashboardUncheckedCreateWithoutLinkInputSchema: z.ZodType<Prisma.DashboardUncheckedCreateWithoutLinkInput> = z.object({
  id: z.string().cuid().optional(),
  projectId: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  doIndex: z.boolean().optional(),
  password: z.string().optional().nullable(),
  showConversions: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DashboardUncheckedCreateWithoutLinkInputSchema;
