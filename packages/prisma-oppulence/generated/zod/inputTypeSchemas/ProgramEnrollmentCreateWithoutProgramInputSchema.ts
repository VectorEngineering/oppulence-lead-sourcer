import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema';
import { PartnerCreateNestedOneWithoutProgramsInputSchema } from './PartnerCreateNestedOneWithoutProgramsInputSchema';
import { LinkCreateNestedOneWithoutProgramEnrollmentInputSchema } from './LinkCreateNestedOneWithoutProgramEnrollmentInputSchema';
import { DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema } from './DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema';
import { ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema } from './ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema';

export const ProgramEnrollmentCreateWithoutProgramInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateWithoutProgramInput> = z.object({
  id: z.string().cuid().optional(),
  commissionAmount: z.number().int().optional().nullable(),
  status: z.lazy(() => ProgramEnrollmentStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  partner: z.lazy(() => PartnerCreateNestedOneWithoutProgramsInputSchema),
  link: z.lazy(() => LinkCreateNestedOneWithoutProgramEnrollmentInputSchema).optional(),
  discount: z.lazy(() => DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema).optional(),
  application: z.lazy(() => ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema).optional()
}).strict();

export default ProgramEnrollmentCreateWithoutProgramInputSchema;
