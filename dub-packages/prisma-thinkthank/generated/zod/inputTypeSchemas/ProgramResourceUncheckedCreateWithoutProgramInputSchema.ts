import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceTypeSchema } from './ProgramResourceTypeSchema';

export const ProgramResourceUncheckedCreateWithoutProgramInputSchema: z.ZodType<Prisma.ProgramResourceUncheckedCreateWithoutProgramInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => ProgramResourceTypeSchema),
  name: z.string(),
  url: z.string(),
  size: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ProgramResourceUncheckedCreateWithoutProgramInputSchema;
