import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerCreateNestedOneWithoutApplicationsInputSchema } from './PartnerCreateNestedOneWithoutApplicationsInputSchema';
import { ProgramEnrollmentCreateNestedOneWithoutApplicationInputSchema } from './ProgramEnrollmentCreateNestedOneWithoutApplicationInputSchema';

export const ProgramApplicationCreateWithoutProgramInputSchema: z.ZodType<Prisma.ProgramApplicationCreateWithoutProgramInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  proposal: z.string().optional().nullable(),
  website: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  partner: z.lazy(() => PartnerCreateNestedOneWithoutApplicationsInputSchema).optional(),
  enrollment: z.lazy(() => ProgramEnrollmentCreateNestedOneWithoutApplicationInputSchema).optional()
}).strict();

export default ProgramApplicationCreateWithoutProgramInputSchema;
