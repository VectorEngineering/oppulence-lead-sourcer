import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommissionTypeSchema } from './CommissionTypeSchema';
import { CommissionIntervalSchema } from './CommissionIntervalSchema';
import { ProgramEnrollmentCreateNestedManyWithoutDiscountInputSchema } from './ProgramEnrollmentCreateNestedManyWithoutDiscountInputSchema';

export const DiscountCreateWithoutProgramInputSchema: z.ZodType<Prisma.DiscountCreateWithoutProgramInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number().int().optional(),
  type: z.lazy(() => CommissionTypeSchema).optional(),
  duration: z.number().int().optional().nullable(),
  interval: z.lazy(() => CommissionIntervalSchema).optional().nullable(),
  couponId: z.string().optional().nullable(),
  couponTestId: z.string().optional().nullable(),
  workspaceId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  programEnrollments: z.lazy(() => ProgramEnrollmentCreateNestedManyWithoutDiscountInputSchema).optional()
}).strict();

export default DiscountCreateWithoutProgramInputSchema;
