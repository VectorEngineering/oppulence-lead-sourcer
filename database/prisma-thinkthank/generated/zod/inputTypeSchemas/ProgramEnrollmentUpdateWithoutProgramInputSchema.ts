import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema';
import { EnumProgramEnrollmentStatusFieldUpdateOperationsInputSchema } from './EnumProgramEnrollmentStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PartnerUpdateOneRequiredWithoutProgramsNestedInputSchema } from './PartnerUpdateOneRequiredWithoutProgramsNestedInputSchema';
import { LinkUpdateOneWithoutProgramEnrollmentNestedInputSchema } from './LinkUpdateOneWithoutProgramEnrollmentNestedInputSchema';
import { DiscountUpdateOneWithoutProgramEnrollmentsNestedInputSchema } from './DiscountUpdateOneWithoutProgramEnrollmentsNestedInputSchema';
import { ProgramApplicationUpdateOneWithoutEnrollmentNestedInputSchema } from './ProgramApplicationUpdateOneWithoutEnrollmentNestedInputSchema';

export const ProgramEnrollmentUpdateWithoutProgramInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateWithoutProgramInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  commissionAmount: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => ProgramEnrollmentStatusSchema),z.lazy(() => EnumProgramEnrollmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  partner: z.lazy(() => PartnerUpdateOneRequiredWithoutProgramsNestedInputSchema).optional(),
  link: z.lazy(() => LinkUpdateOneWithoutProgramEnrollmentNestedInputSchema).optional(),
  discount: z.lazy(() => DiscountUpdateOneWithoutProgramEnrollmentsNestedInputSchema).optional(),
  application: z.lazy(() => ProgramApplicationUpdateOneWithoutEnrollmentNestedInputSchema).optional()
}).strict();

export default ProgramEnrollmentUpdateWithoutProgramInputSchema;
