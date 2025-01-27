import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DashboardCreateManyUserInputSchema: z.ZodType<Prisma.DashboardCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  linkId: z.string().optional().nullable(),
  projectId: z.string().optional().nullable(),
  doIndex: z.boolean().optional(),
  password: z.string().optional().nullable(),
  showConversions: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DashboardCreateManyUserInputSchema;
