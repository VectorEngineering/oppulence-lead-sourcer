import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentUncheckedCreateNestedOneWithoutApplicationInputSchema } from './ProgramEnrollmentUncheckedCreateNestedOneWithoutApplicationInputSchema';

export const ProgramApplicationUncheckedCreateWithoutProgramInputSchema: z.ZodType<Prisma.ProgramApplicationUncheckedCreateWithoutProgramInput> = z.object({
  id: z.string().cuid().optional(),
  partnerId: z.string().optional().nullable(),
  name: z.string(),
  email: z.string(),
  proposal: z.string().optional().nullable(),
  website: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  enrollment: z.lazy(() => ProgramEnrollmentUncheckedCreateNestedOneWithoutApplicationInputSchema).optional()
}).strict();

export default ProgramApplicationUncheckedCreateWithoutProgramInputSchema;
